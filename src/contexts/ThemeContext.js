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

//* createContext( defaultValue )
export const ThemeContext = React.createContext(themes.dark);
