import api from './api';
import { apiKey } from './apiKey';

export const herosService = {
  async getHeroes(page: number | string) {
    const res = await api.get(`characters?${apiKey()}`, {
      params: { orderBy: 'name', limit: '10', offset: page },
    });
    return res.data;
  },
  async getHero(characterId: string) {
    const res = await api.get(`characters/${characterId}?${apiKey()}`);
    return res.data;
  },
  async getSearchHero(nameHero: string) {
    const res = await api.get(`characters?${apiKey()}`, {
      params: { nameStartsWith: nameHero },
    });
    return res.data;
  },
  async getComicsHero(characterId: string) {
    const res = await api.get(`characters/${characterId}/comics?${apiKey()}`);
    return res.data;
  },
  async getEventsHero(characterId: string) {
    const res = await api.get(`characters/${characterId}/events?${apiKey()}`);
    return res.data;
  },
  async getSeriesHero(characterId: string) {
    const res = await api.get(`characters/${characterId}/series?${apiKey()}`);
    return res.data;
  },
  async getStoriesHero(characterId: string) {
    const res = await api.get(`characters/${characterId}/stories?${apiKey()}`);
    return res.data;
  },
};
