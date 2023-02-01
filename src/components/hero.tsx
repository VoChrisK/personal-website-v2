import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Color } from '../models';
// import { StaticImage } from 'gatsby-plugin-image';
import { Section } from '../shared';

const HeroContent = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	h1 {
		color: ${Color.HeaderColor};
		font-size: 2rem;
		margin-bottom: 10rem;
	}

	h2 {
		color: ${Color.TextColor};
	}

	h3 {
		color: ${Color.TextColor};
	}
`;

export const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { section: { eq: "hero" } }) {
				html
			}
		}
	`);

	const { markdownRemark } = data;

	return (
		<Section>
			<HeroContent
				dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
			></HeroContent>
		</Section>
	);
};
