import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '~src/context/ThemeContext';

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within the ThemeProvider');
  }

  return context;
};

export default useTheme;
