import './App.css';
import type { IUniversities } from './types/cards';
import { useEffect, useState, useContext } from 'react';
import { getDataPage } from './api/getData';
import Header from './components/Header/Header';
import ErrorBoundary from './components/Error/Error';
import CardList from './components/CardList/CardList';
import Main from './components/Main/Main';
import searchData from './api/search';
import Pagination from './components/Pagination/Pagination';
import { ThemeContext } from './context/context';

export default function App() {
  const theme = useContext(ThemeContext);
  const [universities, setUniversities] = useState<IUniversities>([]);
  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem('lastSearch')) {
        const response = await getDataPage();
        setUniversities(response);
      }
      if (localStorage.getItem('lastSearch')) {
        const lastQuery = localStorage.getItem('lastSearch');
        const lastData = await searchData(`${lastQuery}`);
        setUniversities(lastData);
      }
    }
    fetchData();
  }, [theme]);

  return (
    <>
      <ErrorBoundary>
        <ThemeContext value={theme}>
          <Header
            universities={universities}
            setUniversities={setUniversities}
          />
          <Main>
            <h2>Universities</h2>
            <div className="wrapper">
              <CardList universities={universities} />
            </div>
            <Pagination
              universities={universities}
              setUniversities={setUniversities}
            />
          </Main>
        </ThemeContext>
      </ErrorBoundary>
    </>
  );
}
