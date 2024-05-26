import type { AxiosResponse } from 'axios';
import api from './main';

class CharacterApi {
  private readonly controller = '/character';
  async getCharacters(): Promise<AxiosResponse> {
    return api.get(`${this.controller}`);
  }
}

export default new CharacterApi();
