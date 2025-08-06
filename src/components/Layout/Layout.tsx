import './style.css';
import { useEffect, useReducer } from 'react';
import themeReducer from '../../reducers/themeReducer';
import { Outlet, Link } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Layout() {
  const [theme, dispatch] = useReducer(themeReducer, 'light');
  const rootElement = document.body;
  function handleChangeThemeColor(themeColor: string) {
    dispatch({
      type: 'changeTheme',
      themeColor: themeColor,
    });
  }
  useEffect(() => {
    if (rootElement && theme === 'dark') rootElement?.classList.add('dark');
    if (rootElement && theme === 'light') rootElement?.classList.remove('dark');
  }, [theme, rootElement]);
  return (
    <div>
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

      <nav className="navigation">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <footer>
        <a
          href="https://github.com/AlexDrags"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub author
        </a>
        <p>2025.</p>
      </footer>
    </div>
  );
}
