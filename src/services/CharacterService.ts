import CharacterApi from '@/api/CharacterApi';
import type { Characters } from '@/api/interfaces/CharacterInterfaces';
import { charactersResultDefault } from '@/utils/constants';

class CharacterService {
  async getCharacters(): Promise<Characters[]> {
    try {
      const response = await CharacterApi.getCharacters();
      return response.data;
    } catch (error) {
      return charactersResultDefault;
    }
  }
}

export default new CharacterService();
