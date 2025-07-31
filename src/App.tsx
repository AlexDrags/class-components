import './App.css';
import { useEffect, useState } from 'react';
import { getDataPrev } from './api/getData';
import Header from './components/Header/Header';
import ErrorBoundary from './components/Error/Error';
import CardList from './components/CardList/CardList';
import Main from './components/Main/Main';
import searchData from './api/search';
import Pagination from './components/Pagination/Pagination';
// import quryReducer from './reducers/queryReducer';
// import { QueryTextContext } from './context/context';
// import { useStore } from './store/store';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

export default function App() {
  // const [query, dispatch] = useReducer(quryReducer, '');
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

  // function handleChangeQuery(query: string) {
  //   dispatch({
  //     type: 'change',
  //     query: query,
  //   });
  // }

  return (
    <>
      <ErrorBoundary>
        {/* <QueryTextContext value={query}> */}
        <Header universities={universities} setUniversities={setUniversities} />
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
        {/* </QueryTextContext> */}
      </ErrorBoundary>
    </>
  );
}
