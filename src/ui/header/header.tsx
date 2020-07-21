import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import styled from 'Theme/styled-components';

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.Palette.pink[400]};
  height: 80px;
  padding: 0px 20px;
`;

const WrapperLinks = styled.div``;

const LinkButtons = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Header: FunctionComponent = () => (
  <WrapperHeader>
    <h1>My App</h1>
    <WrapperLinks>
      <LinkButtons to="/">Home</LinkButtons>
      <LinkButtons to="/login">Login</LinkButtons>
      <LinkButtons to="/register">Register</LinkButtons>
    </WrapperLinks>
  </WrapperHeader>
);
