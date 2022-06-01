import * as React from 'react';
import { ThemeProvider } from '../dist';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme = (Story, context) => {
  return (
    <ThemeProvider>
      <div id="story-wrapper" style={{ minHeight: '100vh' }}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
