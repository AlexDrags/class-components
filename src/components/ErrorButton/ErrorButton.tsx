import React, { type FormEvent } from 'react';

interface IPropsErrorButton {
  handleError: (event: FormEvent<HTMLFormElement>) => void;
}

class ErrorButton extends React.Component<IPropsErrorButton> {
  render() {
    return (
      <form onSubmit={this.props.handleError}>
        <button type="submit">Get Error</button>
      </form>
    );
  }
}

export { ErrorButton };
