import * as React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import CSSReset from 'src/resets/CSSReset';
import ToastReset from 'src/resets/ToastReset';
import defaultTheme, { ITheme } from 'src/theme';

export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  googleMapsKey: string;
  resetCSS?: boolean;
  theme?: ITheme;
}

export interface ThemeContextProps {
  googleMapsKey: string;
  theme: ITheme;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const {
    children,
    googleMapsKey,
    resetCSS = true,
    theme = defaultTheme,
  } = props;

  const value = React.useMemo(
    () => ({
      googleMapsKey,
      theme: theme,
    }),
    [googleMapsKey, theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <EmotionThemeProvider theme={theme}>
        {resetCSS && <CSSReset />}
        {children}
        <ToastContainer
          autoClose={5000}
          closeOnClick
          draggable
          hideProgressBar
          newestOnTop
          pauseOnFocusLoss
          pauseOnHover
          position="bottom-center"
          rtl={false}
          transition={Slide}
        />
        <ToastReset />
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
