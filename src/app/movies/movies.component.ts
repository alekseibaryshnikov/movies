import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../../movie.interface';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];

  @Output()
  selectedMovie = new EventEmitter<IMovie>();

  constructor(private movieDatabase: DatabaseService) {}

  ngOnInit() {
    this.movieDatabase
      .getMovies()
      .subscribe(movieList => (this.movies = movieList));
  }

  /**
   * Emit selected movie
   * @param $movie selected movie
   */
  public selectMovie($event) {
    this.selectedMovie.emit($event);
  }
}
