import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Color } from '../models';
// import { StaticImage } from 'gatsby-plugin-image';
import { Button, Section } from '../shared';

const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	justitfy-content: space-between;
	align-items: center;

	h1 {
		color: ${Color.HeaderColor};
		font-size: 1.5rem;
		margin: 1rem;
	}

	h2 {
		color: ${Color.TextColor};
		font-size: 4rem;
		margin: 0rem;
	}

	h3 {
		color: ${Color.TextColor};
		width: 40vw;
		text-align: center;
		line-height: 1.5;
		margin-top: 1rem;
		margin-bottom: 4rem;

		strong {
			color: ${Color.HeaderColor};
		}
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
			<Button>Check out my resume!</Button>
		</Section>
	);
};
