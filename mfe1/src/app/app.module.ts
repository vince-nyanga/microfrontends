import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, FlightsModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
