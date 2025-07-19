import './style.css';
import { Component } from 'react';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

class Card extends Component<ICard> {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <p>Country: {this.props.country}</p>
        <p>Web-page: {this.props.web_pages}</p>
      </li>
    );
  }
}

export { Card };
