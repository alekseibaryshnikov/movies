import { Injectable } from '@angular/core';
import { movies } from '../../../movie.mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { IMovie } from '../../../movie.interface';

@Injectable()
export class DatabaseService {
  constructor() {}

  /**
   * Return all existed movies
   */
  getMovies(): Observable<IMovie[]> {
    return of(movies);
  }

  /**
   * Find movie via key in database and return it
   * @param key
   */
  getCurrentMovieByKey(key: string): IMovie {
    return movies.find(movie => {
      return movie.key === key;
    });
  }

  /**
   * Search and return array of movies
   * @param query search string
   */
  searchMovies(query: string): Observable<IMovie[]> {
    let foundMovies: IMovie[];

    if (!query || !query.trim()) {
      return of([]);
    }

    foundMovies = movies.filter(movie => {
      const searchRegExp = RegExp(`${query}`, 'gi');
      return movie.name.match(searchRegExp);
    });

    return of(foundMovies);
  }
}
