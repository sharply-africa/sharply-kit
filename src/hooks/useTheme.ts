import { useContext } from 'react';
import { ThemeContext } from '~src/context/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within the ThemeProvider');
  }

  return context;
};

export default useTheme;
