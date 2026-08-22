export type NodeType = "folder" | "file" | "index";

export interface TreeNode {
  name: string;
  type: NodeType;
  route: string;
  children?: TreeNode[];
}

export const fileTree: TreeNode[] = [
  {
    name: "readme",
    type: "file",
    route: "/",
  },
  {
    name: "writings",
    type: "index",
    route: "/writings",
  },
  {
    name: "hobbies",
    type: "folder",
    route: "/hobbies",
    children: [
      {
        name: "climbing",
        type: "file",
        route: "/hobbies/climbing",
      },
    ],
  },
];

// An index node is considered active when the current route is under its path.
export function isRouteActive(node: TreeNode, currentRoute: string): boolean {
  if (node.route === currentRoute) return true;
  if (node.type === "index" && currentRoute.startsWith(`${node.route}/`)) {
    return true;
  }
  if (node.children) {
    return node.children.some((child) => isRouteActive(child, currentRoute));
  }
  return false;
}

// Whether this specific node should be highlighted. Files and folders highlight
// only on an exact route match; index nodes also highlight when a child is
// nested under them.
export function isNodeActive(node: TreeNode, currentRoute: string): boolean {
  if (node.route === currentRoute) return true;
  if (node.type === "index" && currentRoute.startsWith(`${node.route}/`)) {
    return true;
  }
  return false;
}

// Find the deepest node whose route matches or is a prefix segment of the route.
export function findNode(
  nodes: TreeNode[],
  route: string,
): TreeNode | undefined {
  for (const node of nodes) {
    if (node.route === route) return node;
    if (node.type === "index" && route.startsWith(`${node.route}/`)) {
      return node;
    }
    if (node.children) {
      const found = findNode(node.children, route);
      if (found) return found;
    }
  }
  return undefined;
}

// Returns true if the given path segment corresponds to an index node.
export function isIndexRoute(nodes: TreeNode[], route: string): boolean {
  return findNode(nodes, route)?.type === "index";
}
