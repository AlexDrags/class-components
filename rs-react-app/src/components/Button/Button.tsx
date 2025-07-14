import React, { type ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';
interface IProps {
  children: ReactNode;
  typeButton: ButtonType;
}

class Button extends React.Component<IProps> {
  render() {
    return <button type={this.props.typeButton}>{this.props.children}</button>;
  }
}

export { Button };
