import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';
import { Observable } from 'rxjs/Observable';
import { IMovie } from '../../../movie.interface';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  movies$: Observable<IMovie[]>;
  private searchQuery = new Subject<string>();

  constructor(private movieDatabase: DatabaseService) {}

  ngOnInit() {
    this.movies$ = this.searchQuery.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((query: string) => this.movieDatabase.searchMovies(query))
    );
  }

  searchMovie(query: string): void {
    this.searchQuery.next(query);
  }

  resetSearch(search: HTMLInputElement) {
    this.searchQuery.next(null);
    search.value = '';
  }
}
