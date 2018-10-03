import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { IMovie } from '../../../movie.interface';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  movie: IMovie;

  constructor(
    private route: ActivatedRoute,
    private movieDatabase: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this._getMovie();

    // Changing movie at detail page if searching on the page
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        const key = route.urlAfterRedirects.split('/').pop();
        this.movie = this.movieDatabase.getCurrentMovieByKey(key);
      }
    });
  }

  /**
   * Load movie from database when link has been clicked
   */
  private _getMovie(): void {
    const key = this.route.snapshot.paramMap.get('key');
    this.movie = this.movieDatabase.getCurrentMovieByKey(key);
  }
}
