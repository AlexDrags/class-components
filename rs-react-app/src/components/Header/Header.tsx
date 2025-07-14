import React, { type ChangeEvent, type FormEvent } from 'react';
import { Button } from '../Button/Button';

interface Iprops {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

class Header extends React.Component<Iprops> {
  // constructor(props: object) {
  //   super(props);
  //   this.state = { value: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    return (
      <>
        <header>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              value={this.props.value}
              onChange={this.props.handleChange}
              placeholder="
Please enter the full name of the country"
            />
            <Button typeButton={'submit'}>Search universiti</Button>
          </form>
        </header>
      </>
    );
  }
}

export { Header };
