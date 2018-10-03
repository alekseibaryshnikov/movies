import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    data: { state: 'home' }
  },
  {
    path: 'detail/:key',
    component: MoviesDetailComponent,
    data: { state: 'movieDetails' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
