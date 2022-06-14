import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Section } from '../shared';
import { Color } from '../models';

const HeroContent = styled.div`
  align-items: center;
  display: flex;
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

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {section: {eq: "hero"}}) {
        html
      }
    }
  `);

  const { html } = data.markdownRemark

  return (
    <Section>
      <HeroContent dangerouslySetInnerHTML={{ __html: html }}></HeroContent>
    </Section>
  );
};