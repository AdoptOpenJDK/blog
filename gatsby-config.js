module.exports = {
  siteMetadata: {
    title: "Adoptium Blog",
    description: "Blog of Adoptium",
    siteUrl: "https://blog.adoptium.net/",
    social: {
      twitter: "Adoptium",
    },
  },
  pathPrefix: "/template_string", // For staging only (gets replaced with PR number)
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5WLCZXC",
        includeInDevelopment: true,
      }
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "//www.eclipse.org/eclipse.org-common/themes/solstice/public/javascript/vendor/cookieconsent/default.min.js"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-99905649-2",
    //     anonymize: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-feed-mdx",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.postPath,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.postPath,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  limit: 10
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        postPath
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "AdoptOpenJDK Blog",
            match: undefined,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "AdoptOpenJDK Blog",
        short_name: "AdoptOpenJDK",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/favicon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-eslint"
  ],
};
