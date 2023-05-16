import React, { createContext } from 'react';

type TThemeContext = {
  isDarkTheme: boolean,
  changeTheme: (isDark: boolean) => void,
};

// @ts-ignore
const ThemeContext: React.Context<TThemeContext> = createContext(
  {
    isDarkTheme: false,
    changeTheme: (isDark) => console.log(isDark),
  },
);

export default ThemeContext;
