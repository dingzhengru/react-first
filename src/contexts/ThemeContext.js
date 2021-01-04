import React from 'react';

export const themes = {
  light: {
    name: 'light',
    color: 'black',
    background: 'white',
  },
  dark: {
    name: 'dark',
    color: 'white',
    background: 'black',
  },
};

export const theme = {
  theme: themes.dark,
  setTheme() {},
};

//* createContext( defaultValue )
export const ThemeContext = React.createContext(theme.dark);
