import { render, screen } from '@testing-library/react';
// import App from './App';
import Registration from './views/Registration';

test('renders learn react link', () => {
  render(<Registration />);
  const linkElement = screen.getByText("Registration");
  expect(linkElement).toBeInTheDocument();
});
