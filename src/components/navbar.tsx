import React from 'react';
import styled from 'styled-components';

import { Color } from '../models';

export const Navigation = styled.nav`
  background-color: ${ Color.BackgroundColor };
  box-shadow: 1px 3px 10px #000;
  // justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.0625rem;
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.li`
  color: ${ Color.TextColor };
  cursor: pointer;
  font-size: 1.125rem;
  list-style: none;
  margin: 0 2.5rem;
`;

export const Navbar = () => {
  return (
    <Navigation>
      <LinkList>
        <List>test</List>
        <List>123</List>
        <List>3213</List>
        <List>111</List>
      </LinkList>
    </Navigation>
  );
};