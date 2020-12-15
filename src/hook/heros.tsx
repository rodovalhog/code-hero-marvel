import React, { createContext, useCallback, useContext, useState } from 'react';
import { herosService } from '../services/heroServices';

interface ListHeroProp {
  name: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
}

interface DetailsHero {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
interface ComicsHero {
  title: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HerosContextData {
  getHerosRequest(): void;
  listHero: ListHeroProp[];
  totalPages: number;
  handlePagePagination(offset: number): void;
  searchHeroRequest(name: string): void;
  requestCharacterId(characterId: string): any;
  detailsHero: DetailsHero;
  requestComicsHero(characterId: string): any;
  comicsHero: ComicsHero[];
}

const HerosContext = createContext<HerosContextData>({} as HerosContextData);

const HerosProvider: React.FC = ({ children }) => {
  const [listHero, setListHero] = useState<ListHeroProp[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [detailsHero, setDetailsHero] = useState({
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
  });
  const [comicsHero, setComicsHero] = useState([
    {
      title: '',
      name: '',
      description: '',
      thumbnail: {
        path: '',
        extension: '',
      },
    },
  ]);

  const requestComicsHero = useCallback(async (characterId: string) => {
    const response = await herosService.getComicsHero(characterId);
    console.log('lalallala', response.data.results);
    setComicsHero(response.data.results);
  }, []);

  const requestCharacterId = useCallback(async (characterId: string) => {
    const response = await herosService.getHero(characterId);
    setDetailsHero(response.data.results[0]);
  }, []);

  const handlePagePagination = useCallback(async (offset: number) => {
    const response = await herosService.getHeroes(offset);
    setListHero(response.data.results);
  }, []);

  const searchHeroRequest = useCallback(async (name: string) => {
    const response = await herosService.getSearchHero(name);
    setListHero(response.data.results);
    const totalPagesSearch = response.data.total;

    if (totalPagesSearch <= 10) {
      setTotalPages(0);
    } else {
      setTotalPages(totalPagesSearch);
    }
  }, []);

  const getHerosRequest = useCallback(async () => {
    const response = await herosService.getHeroes('characters');
    setListHero(response.data.results);
    setTotalPages(response.data.total);
  }, []);

  return (
    <HerosContext.Provider
      value={{
        listHero,
        totalPages,
        detailsHero,
        getHerosRequest,
        handlePagePagination,
        searchHeroRequest,
        requestCharacterId,
        requestComicsHero,
        comicsHero,
      }}
    >
      {children}
    </HerosContext.Provider>
  );
};

export const useHero = (): HerosContextData => {
  const context = useContext(HerosContext);

  return context;
};

export default HerosProvider;
