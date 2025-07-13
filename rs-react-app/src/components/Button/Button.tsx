import React, { type ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

class Button extends React.Component<IProps> {
  render() {
    return <button type="submit">{this.props.children}</button>;
  }
}

export { Button };
