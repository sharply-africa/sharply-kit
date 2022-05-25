import * as React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import merge from 'lodash.merge';
import CSSReset from '~src/resets/CSSReset';
import ToastReset from '~src/resets/ToastReset';
import defaultTheme from '~src/theme';

export const ThemeContext = React.createContext({});

const ThemeProvider = (props) => {
  const {
    children,
    googleMapsKey = '',
    resetCSS = true,
    theme = defaultTheme,
  } = props;
  const [customTheme, setCustomTheme] = React.useState({ ...theme });

  const updateTheme = React.useCallback(
    (newTheme = {}) => setCustomTheme((v) => merge(v, newTheme)),
    [],
  );

  const value = React.useMemo(
    () => ({
      googleMapsKey,
      theme: customTheme,
      updateTheme,
    }),
    [customTheme, updateTheme, googleMapsKey],
  );

  return (
    <ThemeContext.Provider value={value}>
      <EmotionThemeProvider theme={customTheme}>
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
