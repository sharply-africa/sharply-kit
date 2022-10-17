import { ITheme } from '../theme/theme.js';
import '../theme/components/index.js';
import '../theme/foundations/index.js';
import '../theme/variants/index.js';
import '../theme/utils.js';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ITheme {}
}
