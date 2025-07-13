// import { Component, type ChangeEvent, type FormEvent } from 'react';
// import { Button } from '../Button/Button';
// import { Search } from '../Search/Search';
// import searchData from '../../api/search';

import React, { type ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
// class Header extends Component<object, { value: string }> {
class Header extends React.Component<IProps> {
  // constructor(props: object) {
  //   super(props);
  //   this.state = { value: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   alert('Отправленное имя: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <>
        <header>
          {this.props.children}
          {/* <form onSubmit={this.handleSubmit}> */}
          {/* <Search />
            <Button /> */}
          {/* <input
              type="text"
              name="search"
              id="search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            ;
            <button type="submit">Search</button>;
          </form> */}
        </header>
      </>
    );
  }
}

export { Header };
