/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Gatsbyjs
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const adoptSocialImage = require("../images/social-image.png");

const SEO = ({ title = "AdoptOpenJDK", description = "", twitterCard }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const siteTitle = title + " | AdoptOpenJDK";

  if (!description) {
    description = site.siteMetadata.description;
  }

  if (twitterCard == null) {
    twitterCard = adoptSocialImage;
  }

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={site.siteMetadata.siteUrl + "/" + twitterCard} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@adoptopenjdk" />
      <meta name="twitter:image" content={site.siteMetadata.siteUrl + "/" + twitterCard} />
      <meta name="twitter:creator" content="@adoptopenjdk" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

// defaultProps removed for React 19 compatibility; defaults are provided via parameters above.

SEO.propTypes = {
  title: PropTypes.string.isRequired
};

export default SEO;
