import './App.css';
import { useEffect, useContext } from 'react';
import Header from './components/Header/Header';
import ErrorBoundary from './components/Error/Error';
import CardList from './components/CardList/CardList';
import Main from './components/Main/Main';
import Pagination from './components/Pagination/Pagination';
import { ThemeContext } from './context/context';
import { useStore } from './store/store';
export default function App() {
  const changeQueryValue = useStore((state) => state.userInputQuery);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem('lastSearch') !== null) {
      changeQueryValue(localStorage.getItem('lastSearch'));
    }
  }, [theme]);

  return (
    <>
      <ErrorBoundary>
        <ThemeContext value={theme}>
          <Header />
          <Main>
            <h2>Universities</h2>
            <div className="wrapper">
              <CardList />
            </div>
            <Pagination />
          </Main>
        </ThemeContext>
      </ErrorBoundary>
    </>
  );
}
