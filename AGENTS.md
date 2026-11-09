## AGENTS

Purpose: Help AI coding agents work productively in this Gatsby (v5) + MDX (v2) blog.

Big picture
- Static site built with Gatsby 5.x, content in `content/blog/**/index.md` (MDX). Images live next to posts.
- Programmatic pages are created in `gatsby-node.ts` using GraphQL over MDX nodes; custom fields `fields.slug` and `fields.postPath` are added in `onCreateNode` and used across templates.
- Main templates live in `src/templates/` (blog-post, blog-page, tag-page, author-page). Shared UI in `src/components/`.
- Site config and plugin wiring in `gatsby-config.js`. Two filesystem sources (`content/blog`, `content/assets`). MDX is configured with remark plugins (images, prism, etc.).
 # AGENTS

Purpose: Help AI coding agents work productively in this Gatsby (v5) + MDX (v2) blog.

Big picture

- Static site built with Gatsby 5.x, content in `content/blog/**/index.md` (MDX). Images live next to posts.

- Programmatic pages are created in `gatsby-node.ts` using GraphQL over MDX nodes; custom fields `fields.slug` and `fields.postPath` are added in `onCreateNode` and used across templates.

- Main templates live in `src/templates/` (blog-post, blog-page, tag-page, author-page). Shared UI in `src/components/`.

- Site config and plugin wiring in `gatsby-config.js`. Two filesystem sources (`content/blog`, `content/assets`). MDX is configured with remark plugins (images, prism, etc.).
# AGENTS

Purpose: Help AI coding agents work productively in this Gatsby (v5) + MDX (v2) blog.

Big picture

- Static site built with Gatsby 5.x, content in `content/blog/**/index.md` (MDX). Images live next to posts.

- Programmatic pages are created in `gatsby-node.ts` using GraphQL over MDX nodes; custom fields `fields.slug` and `fields.postPath` are added in `onCreateNode` and used across templates.

- Main templates live in `src/templates/` (blog-post, blog-page, tag-page, author-page). Shared UI in `src/components/`.

- Site config and plugin wiring in `gatsby-config.js`. Two filesystem sources (`content/blog`, `content/assets`). MDX is configured with remark plugins (images, prism, etc.).

Key workflows

- Install deps: `npm ci` (use Node 18+).

- Dev server: `npm run develop` (hot-reload preview while editing content/components).

- Build: `npm run build` then preview: `npm run serve` (site at <http://localhost:9000>).

- Test script: `npm run test` runs lint then build. Lint uses ESLint 8 with `.eslintrc` (flat config is NOT used here).

Project-specific conventions

- Posts are MDX files at `content/blog/<slug>/index.md` with frontmatter: `title`, `date` (ISO8601), `author`, optional `featuredImage`, `description` for home excerpts. See README for examples.

- Author metadata in `content/authors.json`; author images resolved to `content/assets/authors/<key>.jpg`. If missing, `gatsby-node.ts` downloads GitHub avatar at build time using global `fetch` and writes to that path.

- GraphQL usage relies on custom `fields` on `Mdx` nodes (set in `gatsby-node.ts`). Templates query `fields { slug, postPath }` and `frontmatter { ... }`. When creating new templates/queries, ensure those fields exist or add similar fields in `onCreateNode`.

- Pagination: `gatsby-node.ts` creates `/page/1..N`; index shows up to 10 posts, template queries use `$skip`/`$limit`.

- RSS: only generated in production (`npm run build && npm run serve`).

Important files

- `gatsby-node.ts`: page creation, tag pages, author pages, MDX fields. Uses Node 18 global `fetch` and `fs.promises.writeFile(new Uint8Array(...))` when downloading author avatars.

- `gatsby-config.js`: plugins & site metadata; MDX/remark configuration; Google Analytics; feed; typography.

- `src/templates/*.js`: GraphQL queries + rendering logic per page type.

- `src/components/*`: Layout, SEO, ArticlePreview, Byline, Tags, Comments, etc.

- `content/`: blog posts and assets; authors.json.

Patterns to follow

- When adding GraphQL fields to `Mdx`, define them in `onCreateNode` (slug, postPath). All templates assume these fields are present.

- Use `internal.contentFilePath` when creating pages for MDX (`?__contentFilePath=`) to enable MDX rendering.

- For author pages, ensure each author key in `authors.json` maps to a `.jpg` in `content/assets/authors/` or the avatar fetch will run at build time.

- Keep queries in templates in sync with the schema defined by the plugins and the fields created in `gatsby-node.ts`.

Common pitfalls

- If you see GraphQL errors like “Cannot query field 'fields' on type 'Mdx'”, check `onCreateNode` in `gatsby-node.ts` is creating those fields and that Gatsby is picking up the TS node file (it is, via `gatsby-node.ts`). Run `npm run clean` before `npm run build` after changes.

- Do not upgrade React to v19 or MDX to v3 without coordinating upgrades to Gatsby v6+ and `gatsby-plugin-mdx` v6+. This repo is pinned to Gatsby 5.x with MDX v2.

- ESLint 8 with `.eslintrc` is the current setup; ESLint 9 flat config caused parsing issues. Update only if necessary, and migrate carefully.

Examples

- Creating a new blog post: add `content/blog/hello-world/index.md` with frontmatter, optional images; run `npm run develop`, verify at `/` and `/page/2`.

- Linking to posts: use `node.fields.postPath` provided by `gatsby-node.ts` when building lists (see `src/templates/blog-page.js`).

Local commands (copy/paste)

- Install: `npm ci`

- Dev: `npm run develop`

- Clean + build: `npm run clean && npm run build`

- Preview build: `npm run serve` (<http://localhost:9000>)

Maintainer notes for agents

- Prefer minimal, surgical changes. Avoid upgrading major versions unless explicitly requested.

- When changing GraphQL, run a clean build to regenerate `.cache/schema.gql` and catch schema issues early.

Azure note

- If asked to generate Azure code or commands, follow the Azure best-practices tool guidance available in your environment.

Contribution flow

- Create feature branches from `master` (or the working update branch if collaborating).

- Validate locally before PR:

  - `npm ci`

  - `npm run test` (runs lint + build)

  - Optional: `npm run serve` and verify key pages (/, /page/2, a post, /tags/{tag}, /author/{key}).

- Keep changes minimal; avoid dependency major bumps unless the PR is dedicated to that effort.

- In PRs, call out changes to GraphQL queries/templates and any content structure updates.
Maintainer notes for agents

- Prefer minimal, surgical changes. Avoid upgrading major versions unless explicitly requested.

- When changing GraphQL, run a clean build to regenerate `.cache/schema.gql` and catch schema issues early.

Azure note

- If asked to generate Azure code or commands, follow the Azure best-practices tool guidance available in your environment.

Contribution flow

- Create feature branches from `master` (or the working update branch if collaborating).

- Validate locally before PR:

  - `npm ci`

  - `npm run test` (runs lint + build)

  - Optional: `npm run serve` and verify key pages (/, /page/2, a post, /tags/<tag>, /author/<key>).

- Keep changes minimal; avoid dependency major bumps unless the PR is dedicated to that effort.

- In PRs, call out changes to GraphQL queries/templates and any content structure updates.
