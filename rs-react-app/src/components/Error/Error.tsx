import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }
}
