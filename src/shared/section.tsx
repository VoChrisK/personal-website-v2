import styled from 'styled-components';

import { Color } from '../models';

export const Section = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: ${Color.BackgroundColor};
	min-height: 100vh;
`;
