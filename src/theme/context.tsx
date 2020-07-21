import React, { FunctionComponent } from 'react';

import { Palette, Emphasis } from './index';
import { ThemeProvider as Provider } from './styled-components';

const ThemeProvider: FunctionComponent = ({ children }) => (
  <Provider
    theme={{
      Palette,
      Emphasis,
    }}
  >
    <>{children}</>
  </Provider>
);

export default ThemeProvider;
