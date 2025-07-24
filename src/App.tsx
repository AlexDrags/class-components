import './App.css';
import { useEffect, useState } from 'react';
import { getDataPrev } from './api/getData';
// import { useState, type ChangeEvent, type FormEvent } from 'react';
import Header from './components/Header/Header';
import ErrorBoundary from './components/Error/Error';
import CardList from './components/CardList/CardList';
// import Main from './components/Main/Main';
// import CardList from './components/CardList/CardList';
// import { getDataPrev, getDataNext, getError } from './api/getData';
// import { Pagination } from './components/Pagination/Pagination';
// import { ErrorButton } from './components/ErrorButton/ErrorButton';
// import ErrorBoundary from './components/Error/Error';
// import { useState } from 'react';
// import searchData from './api/search';
// import saveSearchState from './api/saveSearchState';

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
      const response = await getDataPrev();
      setUniversities(response);
    }
    fetchData();
  }, []);
  // constructor(props: object) {
  //   super(props);
  //   this.state = { value: '', universities: [] };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handlePaginationPrev = this.handlePaginationPrev.bind(this);
  //   this.handlePaginationNext = this.handlePaginationNext.bind(this);
  //   this.handleError = this.handleError.bind(this);
  // }

  // async componentDidMount() {
  //   if (!localStorage.getItem('lastSearch')) {
  //     this.setState({
  //       universities: await getDataPrev(),
  //     });
  //   }
  //   if (localStorage.getItem('lastSearch')) {
  //     const lastQuery = localStorage.getItem('lastSearch');
  //     this.setState({
  //       universities: await searchData(`${lastQuery}`),
  //     });
  //   }
  // }

  // async handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   this.setState({ value: event.target.value });
  //   saveSearchState(event.target.value);
  // }

  // async handleError(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   this.setState({
  //     universities: await getError(),
  //   });
  // }

  // async handlePaginationPrev(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   this.setState({
  //     universities: await getDataPrev(),
  //   });
  // }

  // async handlePaginationNext(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   this.setState({
  //     universities: await getDataNext(),
  //   });
  // }

  return (
    <>
      <ErrorBoundary>
        <Header
          value={value}
          setValue={setValue}
          universities={universities}
          setUniversities={setUniversities}
        />
        <CardList universities={universities} />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <Main>
          <h2>Universities</h2>

          <Pagination
            handlePaginationPrev={this.handlePaginationPrev}
            handlePaginationNext={this.handlePaginationNext}
          />
          <ErrorButton handleError={this.handleError} />
        </Main>
      </ErrorBoundary> */}
    </>
  );
}
