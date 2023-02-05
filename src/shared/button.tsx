import styled from 'styled-components';

import { Color } from '../models';

export const Button = styled.button`
	background-color: ${Color.BackgroundColor};
	color: ${Color.HeaderColor};
	font-size: 1.25rem;
	border: 0.125rem ${Color.HeaderColor} solid;
	border-radius: 0.25rem;
	padding: 0.75rem;
`;
