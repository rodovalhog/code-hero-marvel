import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Search from '../../components/Search';

const mockShearch = jest.fn();

jest.mock('react-router-dom');
jest.mock('../../hook/heros', () => {
  return {
    useHero: () => ({
      searchHeroRequest: mockShearch,
      getHerosRequest: jest.fn(),
    }),
  };
});

describe('Test Search Component', () => {
  it('Sho', async () => {
    const { getByPlaceholderText } = render(<Search />);

    const searchCompornent = getByPlaceholderText('Search');
    const value = searchCompornent.textContent;
    fireEvent.change(searchCompornent, { target: { value: 'Teste' } });

    expect(mockShearch).not.toEqual(value);
  });
});
