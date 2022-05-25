import '@emotion/react';
import { ITheme } from '~src/theme';

declare module '@emotion/react' {
  export type Theme = ITheme;
}
