import { render, screen } from '@testing-library/react';
import App from './App';
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

test('renders learn react link', async () => {
  const {container} = render(<App />);

  const result = await axe(container);
  expect(result).toHaveNoViolations();

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  screen.getByText(/test me/i)
});
