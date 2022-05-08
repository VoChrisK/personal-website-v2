import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Description } from '../shared';

export const About = () => {
  //may need to change query to filter based on ID (query($id: String!)) instead
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "About me"}}) {
        html
        frontmatter {
          title
        }
      }
    }
  `);

  const { html, frontmatter } = data.markdownRemark

  return (
    <>
      <h1>{ frontmatter.title }</h1>
      <Description dangerouslySetInnerHTML={{ __html: html }}></Description>
    </>
  );
}