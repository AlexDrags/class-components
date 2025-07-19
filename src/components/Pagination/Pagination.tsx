import React, { type FormEvent } from 'react';

interface IPaginationProps {
  handlePaginationPrev: (event: FormEvent<HTMLFormElement>) => void;
  handlePaginationNext: (event: FormEvent<HTMLFormElement>) => void;
}

class Pagination extends React.Component<IPaginationProps> {
  render() {
    return (
      <>
        <form onSubmit={this.props.handlePaginationPrev}>
          <button type="submit">1</button>
        </form>
        <form onSubmit={this.props.handlePaginationNext}>
          <button type="submit">2</button>
        </form>
      </>
    );
  }
}

export { Pagination };
