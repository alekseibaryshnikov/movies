import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DatabaseService } from './shared/services/database.service';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { OutlickedDirective } from './shared/directives/outlicked.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesDetailComponent,
    HeaderSearchComponent,
    OutlickedDirective
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
