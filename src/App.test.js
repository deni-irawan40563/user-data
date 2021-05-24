import { render, screen } from '@testing-library/react';
import Route from './Configs/Routes/Routes';

test('render Text Navbar Front-End Developer List', () => {
  render(<Route />);
  const navbarTitle = screen.getByText(/Front-End Developer List/);
  expect(navbarTitle).toBeInTheDocument();
});

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});
