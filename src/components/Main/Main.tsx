import React, { type ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}
class Main extends React.Component<IChildren> {
  render() {
    return <main>{this.props.children}</main>;
  }
}

export { Main };
