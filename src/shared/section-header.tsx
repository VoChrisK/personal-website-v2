import styled from 'styled-components';

import { Color } from '../models';

export const SectionHeader = styled.h1`
  border-bottom: 0.125rem solid ${ Color.HeaderColor };
  color: ${ Color.TextColor };
  font-size: 1.5rem;
  text-align: center;
  width: 40%;
`;