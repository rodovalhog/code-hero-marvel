import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { useHero } from '../../hook/heros';

import { Container } from './styles';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Search: React.FC = () => {
  const { searchHeroRequest, getHerosRequest } = useHero();
  const [nameSearch, setNameSearch] = useState('');

  const searchDebaunce = useDebounce(nameSearch, 1000);

  useEffect(() => {
    if (searchDebaunce) {
      searchHeroRequest(searchDebaunce);
    }
    if (!nameSearch && !searchDebaunce) {
      getHerosRequest();
    }
  }, [searchDebaunce, nameSearch, getHerosRequest, searchHeroRequest]);

  return (
    <Container>
      <input
        placeholder="Search"
        type="search"
        onChange={(e) => {
          setNameSearch(e.target.value);
        }}
      />
      <SearchIcon />
    </Container>
  );
};

export default Search;
