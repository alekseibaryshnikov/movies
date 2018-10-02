import { Injectable } from '@angular/core';
import { movies } from '../../../movie.mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { IMovie } from '../../../movie.interface';

@Injectable()
export class DatabaseService {
  constructor() {}

  getMovies(): Observable<IMovie[]> {
    return of(movies);
  }
}
