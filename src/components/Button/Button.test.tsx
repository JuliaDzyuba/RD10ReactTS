import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const mockOnClick = jest.fn();

describe('Button component', () => {
  test('should call onClick if clicked on "Add User" button', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} />);
   
    const addUserBtn = screen.getByText(/add new user/i);
    fireEvent.click(addUserBtn);
    
    expect(addUserBtn).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
