import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title, desc, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
          image
          siteUrl
        }
      }
    }
  `);

  const props = {
    logo: data.site.siteMetadata.logo,
    card: data.site.siteMetadata.image,
    siteUrl: data.site.siteMetadata.siteUrl,
  };

  return (
    <>
      <title>{title ? `${title} | Tiger Taylor` : "Tiger Taylor"}</title>
      <meta
        name="description"
        content={desc | "Tiger Taylor's personal website."}
      />
      <meta name="image" content={props.image} />
      <meta name="author" content="Tiger Taylor" />
      <meta name="keywords" content="Tiger Taylor, Tiger, Taylor" />

      <meta property="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={props.logo} />
      <meta name="twitter:card" content={props.card} />
      <meta name="twitter:site" content={props.siteUrl} />

      <link
        rel="icon"
        href="favicon256x256.png"
        type="image/png"
        sizes="192x192"
      ></link>

      {children}
    </>
  );
};

export default SEO;
