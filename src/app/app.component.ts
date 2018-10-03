import { Component } from '@angular/core';
import { IMovie } from '../movie.interface';

import { routerTransition } from './app.router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';
  movie: IMovie;

  public movieDetails($event) {
    this.movie = $event;
  }

  getAnimation(outlet) {
    return outlet.activatedRouteData.state;
  }
}
