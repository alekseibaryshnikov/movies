import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { movies } from '../../movie.mock-data';
import { IMovie } from '../../movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];

  @Output()
  selectedMovie = new EventEmitter<IMovie>();

  constructor() {}

  ngOnInit() {
    this.movies = movies;
  }

  /**
   * Emit selected movie
   * @param $movie selected movie
   */
  public selectMovie($event) {
    this.selectedMovie.emit($event);
  }
}
