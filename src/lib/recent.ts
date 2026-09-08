import { getCollection } from "astro:content";
import { fileTree, type TreeNode } from "./tree";

export interface RecentEntry {
  title: string;
  href: string;
  updatedAt: Date;
}

export interface RecentSections {
  pages: RecentEntry[];
  writings: RecentEntry[];
}

// Collect every file/index node as a name -> route map. The sidebar tree is the
// source of truth for page routes, so page content is resolved through it rather
// than inferred from file names.
function collectRoutes(
  nodes: TreeNode[],
  map: Map<string, string>,
): Map<string, string> {
  for (const node of nodes) {
    map.set(node.name, node.route);
    if (node.children) collectRoutes(node.children, map);
  }
  return map;
}

// Build a page entry list, dropping pages without an updated date (e.g. the
// readme and index pages, which intentionally carry no dates).
function pageEntries(
  pages: Awaited<ReturnType<typeof getCollection<"page">>>,
  routes: Map<string, string>,
): RecentEntry[] {
  return pages
    .filter((page) => page.data.updatedAt != null)
    .map((page) => ({
      title: page.data.title,
      href: routes.get(page.id) ?? `/${page.id}`,
      updatedAt: page.data.updatedAt as Date,
    }))
    .sort((a, b) => b.updatedAt.valueOf() - a.updatedAt.valueOf());
}

// Split pages and writings into two lists, each sorted by most recent update.
export async function getRecentSections(
  limit: number,
): Promise<RecentSections> {
  const [pages, writings] = await Promise.all([
    getCollection("page"),
    getCollection("writing"),
  ]);

  const routes = collectRoutes(fileTree, new Map());

  const writingList: RecentEntry[] = writings
    .map((writing) => ({
      title: writing.data.title,
      href: `/writings/${writing.id}`,
      updatedAt: writing.data.updatedAt,
    }))
    .sort((a, b) => b.updatedAt.valueOf() - a.updatedAt.valueOf());

  return {
    pages: pageEntries(pages, routes).slice(0, limit),
    writings: writingList.slice(0, limit),
  };
}
