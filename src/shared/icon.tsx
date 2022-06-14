import styled from 'styled-components';

import { Color } from '../models';

export const Icon = styled.a`
  color: ${ Color.TextColor };
  font-size: 2.25rem;
  list-style-type: none;
  margin: 0.5rem 0;
  transition: color 0.25s;

  :hover {
    color: ${ Color.HeaderColor }
  }
`;