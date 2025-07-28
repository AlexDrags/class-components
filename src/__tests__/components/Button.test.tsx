import { render, screen } from '@testing-library/react';
import Button from '../../components/Button/Button';
import '@testing-library/jest-dom/vitest';

describe('Button', () => {
  it('should render card list when load array cards', () => {
    render(<Button typeButton="button" />);
    const listUniversities = screen.getByRole('button');
    expect(listUniversities).toBeInTheDocument();
  });
});
