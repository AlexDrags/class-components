import './App.css';
import { Component, type ChangeEvent, type FormEvent } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CardList from './components/CardList/CardList';
import { getDataPrev, getDataNext, getError } from './api/getData';
import { Pagination } from './components/Pagination/Pagination';
import { ErrorButton } from './components/ErrorButton/ErrorButton';
import ErrorBoundary from './components/Error/Error';
import searchData from './api/search';
import saveSearchState from './api/saveSearchState';

class App extends Component<object, { value: string; universities: [] }> {
  constructor(props: object) {
    super(props);
    this.state = { value: '', universities: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePaginationPrev = this.handlePaginationPrev.bind(this);
    this.handlePaginationNext = this.handlePaginationNext.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  async componentDidMount() {
    if (!localStorage.getItem('lastSearch')) {
      this.setState({
        universities: await getDataPrev(),
      });
    }
    if (localStorage.getItem('lastSearch')) {
      const lastQuery = localStorage.getItem('lastSearch');
      this.setState({
        universities: await searchData(`${lastQuery}`),
      });
    }
  }

  async handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    saveSearchState(event.target.value);
  }

  async handleError(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      universities: await getError(),
    });
  }

  async handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      universities: await searchData(this.state.value),
    });
  }

  async handlePaginationPrev(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      universities: await getDataPrev(),
    });
  }

  async handlePaginationNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      universities: await getDataNext(),
    });
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header
            value={this.state.value}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <Main>
            <h2>Universities</h2>
            <CardList universities={this.state.universities} />
            <Pagination
              handlePaginationPrev={this.handlePaginationPrev}
              handlePaginationNext={this.handlePaginationNext}
            />
            <ErrorButton handleError={this.handleError} />
          </Main>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
