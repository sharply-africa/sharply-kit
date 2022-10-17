import * as React from 'react';
import { ITheme } from '../theme/theme.js';
import '../theme/components/index.js';
import '../theme/foundations/index.js';
import '../theme/variants/index.js';
import '../theme/utils.js';

interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
    googleMapsKey: string;
    resetCSS?: boolean;
    theme?: ITheme;
}
interface ThemeContextProps {
    googleMapsKey: string;
    theme: ITheme;
    updateTheme(theme: ITheme): void;
}
declare const ThemeContext: React.Context<ThemeContextProps>;
declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;

export { ThemeContext, ThemeContextProps, ThemeProvider as default };
