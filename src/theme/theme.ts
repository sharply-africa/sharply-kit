import components from './components';
import foundations from './foundations';
import variants from './variants';

export type IThemeComponentButtons = typeof components.buttons;
export type IThemeComponentForm = typeof components.form;
export type IThemeComponentText = typeof components.text;
export type IThemeFoundationBreakpoints = typeof foundations.breakpoints;
export type IThemeFoundationColors =
  | typeof foundations.colors
  | Record<string, any>;
export type IThemeFoundationMediaQuery = typeof foundations.mq;
export type IThemeFoundationRadii = typeof foundations.radii;
export type IThemeFoundationShadows = typeof foundations.shadows;
export type IThemeFoundationSpace = typeof foundations.space;
export type IThemeFoundationZIndices = typeof foundations.zIndices;
export type IThemeTypographyFontFamilies = typeof foundations.fonts;
export type IThemeTypographyFontSizes = typeof foundations.fontSizes;
export type IThemeTypographyFontWeights = typeof foundations.fontWeights;
export type IThemeTypographyLetterSpacings = typeof foundations.letterSpacings;
export type IThemeTypographyLineHeights = typeof foundations.lineHeights;
export type IThemeTypographyTextAlign = typeof foundations.textAlign;
export type IThemeVariants = typeof variants;

export type ITheme = {
  breakpoints: IThemeFoundationBreakpoints;
  buttons: IThemeComponentButtons;
  colors: IThemeFoundationColors;
  fonts: IThemeTypographyFontFamilies;
  fontSizes: IThemeTypographyFontSizes;
  fontWeights: IThemeTypographyFontWeights;
  form: IThemeComponentForm;
  letterSpacings: IThemeTypographyLetterSpacings;
  lineHeights: IThemeTypographyLineHeights;
  mq: IThemeFoundationMediaQuery;
  radii: IThemeFoundationRadii;
  shadows: IThemeFoundationShadows;
  space: IThemeFoundationSpace;
  text: IThemeComponentText;
  textAlign: IThemeTypographyTextAlign;
  variants: IThemeVariants;
  zIndices: IThemeFoundationZIndices;
};

const theme: ITheme = {
  ...components,
  ...foundations,
  variants,
};

export * from './utils';

export default theme;
