import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Description, Section, SectionHeader } from '../shared';

export const About = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { section: { eq: "about" } }) {
				html
				frontmatter {
					title
				}
			}
		}
	`);

	const { html, frontmatter } = data.markdownRemark;

	return (
		<Section>
			<SectionHeader>{frontmatter.title}</SectionHeader>
			<div style={{ 'min-height': 'auto' }}>
				<Description dangerouslySetInnerHTML={{ __html: html }}></Description>
			</div>
		</Section>
	);
};
