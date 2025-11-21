import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App routing and theme behavior', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    window.history.pushState({}, 'Test page', '/');
  });

  test('renders the home hero content after theme initialization', async () => {
    render(<App />);

    const heroHeading = await screen.findByRole('heading', {
      name: /sahan pathirannahalage/i,
    });

    expect(heroHeading).toBeInTheDocument();
  });

  test('navigates to the About page when the nav link is clicked', async () => {
    render(<App />);

    await screen.findByRole('heading', { name: /sahan pathirannahalage/i });

    await userEvent.click(
      screen.getByRole('link', {
        name: /about me/i,
      })
    );

    expect(
      await screen.findByRole('heading', { name: /about me/i })
    ).toBeInTheDocument();
  });

  test('toggles the html dark class when the theme switch is pressed', async () => {
    render(<App />);

    await screen.findByRole('heading', { name: /sahan pathirannahalage/i });

    const toggleButton = screen.getByLabelText(/toggle theme/i);

    await userEvent.click(toggleButton);
    await waitFor(() =>
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    );

    await userEvent.click(toggleButton);
    await waitFor(() =>
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    );
  });
});
