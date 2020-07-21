import * as styledComponents from 'styled-components';

import { EmphasisType } from './emphasis';
import { PaletteType } from './palette';

const {
  default: styled,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{
  Palette: PaletteType;
  Emphasis: EmphasisType;
}>;

export { createGlobalStyle, ThemeProvider };
export default styled;
