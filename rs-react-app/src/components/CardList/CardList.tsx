import './style.css';
import { Component } from 'react';
import { Card } from '../Card/Card';
// import {getData} from '../../api/getData';
// import searchData from '../../api/search';
class CardList extends Component {
  state = {
    universities: [],
    query: '',
  };

  // async componentDidUpdate() {
  //   this.setState({
  //     query: await searchData(this.state.query),
  //   });
  //   this.destroyConnection();
  // }
  // destroyConnection() {
  //   throw new Error('Method not implemented.');
  // }

  // async componentDidMount() {
  //   this.setState({
  //     universities: await getData(),
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Universities</h2>
        <ul className="cardItem">
          {this.state.universities.map(
            (
              {
                name,
                country,
                web_pages,
              }: {
                name: string;
                country: string;
                web_pages: string;
              },
              index
            ) => {
              return (
                <Card
                  key={index}
                  name={name}
                  country={country}
                  web_pages={web_pages}
                />
              );
            }
          )}
        </ul>
      </div>
    );
  }
}

export { CardList };
