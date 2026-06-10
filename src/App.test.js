import { render, screen } from '@testing-library/react';
import { Button } from './components/Button';

test('renders a button with its label', () => {
  render(<Button>Connect</Button>);
  expect(screen.getByRole('button', { name: 'Connect' })).toBeInTheDocument();
});
