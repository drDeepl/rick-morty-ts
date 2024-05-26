import type { Characters } from '@/api/interfaces/CharacterInterfaces';
import { charactersResultDefault } from '@/utils/constants';
import { ref } from 'vue';

export function useCharacters() {
  const characters = ref<Characters>(charactersResultDefault);
  async function fetchCharacters(): Promise<Characters> {}
}
