import styled from 'styled-components';

import { Color } from '../models';

export const Section = styled.section`
  align-items: center;
  background-color: ${ Color.BackgroundColor };
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;