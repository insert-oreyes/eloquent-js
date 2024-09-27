import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';
import userEvent from '@testing-library/user-event';

describe('FizzBuzz', () => {
  it('renders the phrase value', () => {
    const phraseValue = 'Hello, world!';
    render(<FizzBuzz phraseValue={phraseValue} />);
    expect(screen.getByText(phraseValue)).toBeInTheDocument();
  });

  it('updates the phrase value when the input changes', async () => {
    const phraseValue = 'Hello, world!';
    const newPhraseValue = 'Goodbye, world!';
    render(<FizzBuzz phraseValue={phraseValue} />);
    const input = screen.getByLabelText('Phrase');
    await userEvent.type(input, newPhraseValue);
    expect(screen.getByText(newPhraseValue)).toBeInTheDocument();
  });
});
