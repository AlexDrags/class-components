'use client';
import { useEffect, useReducer } from 'react';
import themeReducer from '../../reducers/themeReducer';

export default function ThemeToggle() {
  const [theme, dispatch] = useReducer(themeReducer, 'light');

  function handleChangeThemeColor(themeColor: string) {
    dispatch({
      type: 'changeTheme',
      themeColor: themeColor,
    });
  }

  useEffect(() => {
    const rootElement = document.body;
    if (rootElement) {
      if (rootElement && theme === 'dark') rootElement?.classList.add('dark');
      if (rootElement && theme === 'light')
        rootElement?.classList.remove('dark');
    }
  }, [theme]);

  return (
    <label htmlFor="theme">
      Current theme color: {`${theme}`}
      <input
        type="checkbox"
        name="theme"
        id="theme"
        onChange={(e) => {
          if (e.target.checked === true) handleChangeThemeColor('dark');
          if (e.target.checked !== true) handleChangeThemeColor('light');
        }}
      />
    </label>
  );
}
