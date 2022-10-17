import { ThemeContextProps } from '../context/ThemeContext.js';
import 'react';
import '../theme/theme.js';
import '../theme/components/index.js';
import '../theme/foundations/index.js';
import '../theme/variants/index.js';
import '../theme/utils.js';

declare const useTheme: () => ThemeContextProps;

export { useTheme as default };
