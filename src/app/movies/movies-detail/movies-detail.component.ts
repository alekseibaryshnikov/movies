import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IMovie } from '../../../movie.interface';
import { movies } from '../../../movie.mock-data';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  movie: IMovie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this._getMovie();
  }

  private _getMovie(): void {
    const key = this.route.snapshot.paramMap.get('key');
    this.movie = movies.find(movie => {
      return movie.key === key;
    });
  }
}
