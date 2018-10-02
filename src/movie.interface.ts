import { GenreType } from './movie.model';

export interface IMovie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<GenreType>;
  rate: string;
  length: string;
  img: string;
}
