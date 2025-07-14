import './App.css';
import { Component, type ChangeEvent, type FormEvent } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { CardList } from './components/CardList/CardList';
import { getDataPrev, getDataNext } from './api/getData';
import searchData from './api/search';

class App extends Component<object, { value: string; universities: [] }> {
  constructor(props: object) {
    super(props);
    this.state = { value: '', universities: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePaginationPrev = this.handlePaginationPrev.bind(this);
    this.handlePaginationNext = this.handlePaginationNext.bind(this);
  }

  async componentDidMount() {
    this.setState({
      universities: await getDataPrev(),
    });
  }

  async handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
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
        <Header
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Main>
          <h2>Universities</h2>
          <CardList universities={this.state.universities} />

          <form onSubmit={this.handlePaginationPrev}>
            <button type="submit">1</button>
          </form>
          <form onSubmit={this.handlePaginationNext}>
            <button type="submit">2</button>
          </form>
        </Main>
      </>
    );
  }
}

export default App;
