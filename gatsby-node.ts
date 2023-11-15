import path from 'path'
import fetch from 'node-fetch'
import fs from 'fs'

import { pipeline } from 'stream'
import { promisify } from 'util'
import { createFilePath } from 'gatsby-source-filesystem'

import type { GatsbyNode, Node } from 'gatsby'

interface MdxNode extends Node {
  frontmatter: {
    date: string;
  };
  fields: {
    slug: string;
    gitSHA?: string;
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const authorJson = require("./content/authors.json");
  const authorPage = path.resolve("./src/templates/author-page.js");

  for (let author of Object.keys(authorJson)) {
    try {
      await fs.promises.access(`content/assets/authors/${author}.jpg`);
    } catch (error) {
      const githubUsername = authorJson[author].github;
      const streamPipeline = promisify(pipeline);
      const response = await fetch(`https://github.com/${githubUsername}.png?size=250`);
      if (!response.ok) {
        throw new Error(`Unexpected response: ${response.statusText}`);
      }
      await streamPipeline(response.body, fs.createWriteStream(`content/assets/authors/${author}.jpg`));
    }

    createPage({
      path: `/author/${author}`,
      component: authorPage,
      context: {
        author: author,
        limit: 10,
      },
    });
  }

  const tagTemplate = path.resolve("./src/templates/tag-page.js");
  const blogPost = path.resolve("./src/templates/blog-post.js");
  const result = await graphql<{
    allMdx: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
            postPath: string;
          };
          frontmatter: {
            title: string;
            tags: string[];
          };
          internal: {
            contentFilePath: string;
          };
        };
      }>;
    };
    tagsGroup: {
      group: Array<{
        fieldValue: string;
      }>;
    };
  }>(
    `
      {
        allMdx(sort: {frontmatter: {date: DESC}}) {
          edges {
            node {
              fields {
                slug
                postPath
              }
              frontmatter {
                title
                tags
              }
              internal {
                contentFilePath
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: {frontmatter: {tags: SELECT}}) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error("Error retrieving blog posts");
  }

  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `${post.node.fields.postPath}`,
      component: `${blogPost}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        slug: post.node.fields.slug,
        postPath: post.node.fields.postPath,
        previous,
        next,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, index) => {
    const currentPageNumber = index + 1;
    const previousPageNumber =
      currentPageNumber === 1 ? null : currentPageNumber - 1;
    const nextPageNumber =
      currentPageNumber === numPages ? null : currentPageNumber + 1;

    createPage({
      path: `/page/${index + 1}`,
      component: path.resolve("./src/templates/blog-page.js"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPageNumber,
        previousPageNumber,
        nextPageNumber,
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    const mdxNode = node as MdxNode
    const date = new Date(mdxNode.frontmatter.date);
    const year = date.getFullYear();
    const zeroPaddedMonth = `${date.getMonth() + 1}`.padStart(2, "0");

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
    createNodeField({
      name: "postPath",
      node,
      value: `/${year}/${zeroPaddedMonth}${slug}`,
    });
  }
};
