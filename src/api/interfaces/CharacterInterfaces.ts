export interface Origin {
  name: String;
  url: String;
}
export interface Location {
  name: String;
  url: String;
}

export interface Character {
  id: Number;
  name: Number;
  status: String;
  species: String;
  type: String;
  gender: String;
  origin: Origin;
  location: Location;
  image: String;
  episode: String[];
  url: String;
  /* DateTimeZone */
  created: String;
}

export interface CharactersPage {
  info: {
    count: Number;
    pages: Number;
    next: String | null;
    prev: String | null;
  };
  results: Character[];
}
