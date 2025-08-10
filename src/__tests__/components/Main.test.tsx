import { render, screen } from '@testing-library/react';
import Main from '../../components/Main/Main';

describe('Main', () => {
  it('it should render main', () => {
    render(<Main>Some text</Main>);
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });
});
