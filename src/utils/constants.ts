import type { CharactersPage } from "@/api/interfaces/CharacterInterfaces";

export const API_BASE_URL: string = 'https://rickandmortyapi.com/api';

export const charactersResultDefault: CharactersPage = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null
  },
  results: Character[]
};
