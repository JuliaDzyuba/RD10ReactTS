import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

const mockUsers = [{
  name: `new user`,
      currentRole: 'user',
      avatar: 'https://via.placeholder.com/300',
      summary: '',
      education: [],
      experience: [],
      skills: {
        mainStack: ['rr'],
        database: ['rr'],
        additionally: ['rr'],
        englishLevel: 'rr',
      }
}];

describe("Form component", () => {
  test('should render', () => {
    const { container } = render(<Form users={mockUsers}/>);

    expect(container).toMatchSnapshot();
  });

  test('should contain inputs', () => {
    render(<Form users={mockUsers}/>);
    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toEqual(2);
  });

  test('should change input value if user types', () => {
    render(<Form users={mockUsers}/>);

    const input = screen.getByPlaceholderText(/Second input\.\.\./i);
    fireEvent.change(input, {target: {value: 'Some text'}});

    expect(input).toHaveValue('Some text');
  });
});
