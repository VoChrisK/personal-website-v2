import React from 'react';
import styled from 'styled-components';

import { Color } from '../models';

export const Navigation = styled.nav`
	background-color: ${Color.BackgroundColor};
	box-shadow: 1px 3px 10px #000;
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 4.0625rem;
`;

export const LinkList = styled.ul`
	display: flex;
	counter-reset: listCounter;
`;

export const List = styled.li`
	color: ${Color.TextColor};
	cursor: pointer;
	font-size: 1.25rem;
	list-style: none;
	margin: 0 1.5rem;

	:before {
		content: '0' counter(listCounter) '. ';
		counter-increment: listCounter;
		color: ${Color.HeaderColor};
		font-size: 1.25rem;
		margin-right: 0.625rem;
	}
`;

export const Navbar = () => {
	return (
		<Navigation>
			<LinkList>
				<List>About</List>
				<List>Experience</List>
				<List>Projects</List>
				<List>Personal</List>
				<List>Contact</List>
			</LinkList>
		</Navigation>
	);
};
