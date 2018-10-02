import { Component } from '@angular/core';
import { IMovie } from '../movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  movie: IMovie;

  public movieDetails($event) {
    this.movie = $event;
  }
}
