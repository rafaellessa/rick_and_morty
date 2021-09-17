export interface PersonApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'male' | 'female';
  location: string;
  image: string;
  episode: Array<string>;
}

export interface Person {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'masculino' | 'femenino';
  location: string;
  image: string;
  episode: Array<string>;
}
