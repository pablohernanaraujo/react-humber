import React, { FunctionComponent } from 'react';

import styled from 'Theme/styled-components';

const WrapperScreen = styled.div`
  padding: 0px 20px;
`;

export const Wrapper: FunctionComponent = ({ children }) => (
  <WrapperScreen>{children}</WrapperScreen>
);
