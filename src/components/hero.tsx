import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { Section } from '../shared';
import { Color } from '../models';

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${ Color.HeaderColor };
    font-size: 2rem;
    margin-bottom: 10rem;
  }

  h2 {
    color: ${ Color.TextColor };
  }

  h3 {
    color: ${ Color.TextColor };
  }
`;

console.log('placeholder');

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {section: {eq: "hero"}}) {
        html
      }
    }
  `);

  const { markdownRemark } = data;

  return (
    <Section>
      <HeroContent dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></HeroContent>
    </Section>
  );
};