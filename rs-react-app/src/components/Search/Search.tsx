import { Component, type ReactNode } from 'react';

class Search extends Component {
  render(): ReactNode {
    return <input type="text" name="search" id="search" />;
  }
}

export { Search };
