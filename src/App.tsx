import './App.css';
import { useEffect, useState } from 'react';
import { getDataPrev } from './api/getData';
import Header from './components/Header/Header';
import ErrorBoundary from './components/Error/Error';
import CardList from './components/CardList/CardList';
import Main from './components/Main/Main';
import searchData from './api/search';
import { Pagination } from './components/Pagination/Pagination';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

export default function App() {
  const [value, setValue] = useState('');
  const [universities, setUniversities] = useState<ICard[]>([]);
  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem('lastSearch')) {
        const response = await getDataPrev();
        setUniversities(response);
      }
      if (localStorage.getItem('lastSearch')) {
        const lastQuery = localStorage.getItem('lastSearch');
        const lastData = await searchData(`${lastQuery}`);
        setUniversities(lastData);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ErrorBoundary>
        <Header
          value={value}
          setValue={setValue}
          universities={universities}
          setUniversities={setUniversities}
        />
        <Main>
          <h2>Universities</h2>
          <CardList universities={universities} />
          <Pagination
            handlePaginationPrev={() => {}}
            handlePaginationNext={() => {}}
          />
        </Main>
      </ErrorBoundary>
    </>
  );
}
