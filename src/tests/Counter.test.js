import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessageElement = screen.getByText(/counter/i);
  expect(counterMessageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // First, we increment the count to ensure there's something to decrement
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); // Increment to 1

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton); // Decrement back to 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});
