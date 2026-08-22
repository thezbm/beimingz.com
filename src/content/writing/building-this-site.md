---
title: Building This Site
date: 2026-08-18
description: How this code-editor-style personal site is built.
---

# Building This Site

This site is built with **Astro** and deployed to **Cloudflare Pages**. It's styled like a code editor.

## Stack

| Piece           | Choice                                       |
| --------------- | -------------------------------------------- |
| Framework       | Astro                                        |
| Deployment      | Cloudflare Pages                             |
| Content         | Markdown / MDX via Astro content collections |
| Styling         | Plain CSS                                    |
| Package manager | Bun                                          |

## Why Astro + Pages?

Astro ships static HTML by default, which is great for SEO and performance on a content-heavy personal site. Cloudflare Pages handles the hosting, custom domain, and global CDN without me running any servers.

## The Design

The sidebar looks like a file tree in code editors. There are three node types in the sidebar: **file**, **folder**, and **index**. Folders expand to show children and are used to orgnize the content; files link to actual pages; index files serve as a index to a list of children files that aren't shown in the sidebar (like this post, reachable only from its index page).
