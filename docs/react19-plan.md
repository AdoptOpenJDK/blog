# React 19 upgrade plan (tracking)

Status: Blocked by Gatsby 5 peer dependency on React ^18.

Phases

1) Upgrade Gatsby to the first React 19–compatible major and bump all official plugins to matching majors.

2) Align MDX ecosystem: gatsby-plugin-mdx to matching major, @mdx-js/react v3, gatsby-remark-* majors.

3) Upgrade react/react-dom to 19.1.0. Validate SSR/hydration across pages.

Done

- Removed defaultProps on function components (SEO) and used param defaults.
- Switched analytics to gatsby-plugin-google-gtag.
- Cleaned tsconfig include.

To monitor

- `npm view gatsby peerDependencies` should include react: ^19 once supported.

Quick check

- npm run check:compat
