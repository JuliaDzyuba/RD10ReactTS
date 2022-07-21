import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render', () => {
    const { container } = render(<App />);
    
    expect(container).toMatchSnapshot();
  });

  test('renders change theme button', () => {
    render(<App />);

    const changeBtn = screen.getByText(/change theme/i);

    expect(changeBtn).toBeInTheDocument();
  });
});
