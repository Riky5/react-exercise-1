import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 with full name', () => {
  render(<App />);
  const h1Element = screen.getByText(/riky moroni/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders email button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Email/i);
  expect(buttonElement).toBeInTheDocument();
});
