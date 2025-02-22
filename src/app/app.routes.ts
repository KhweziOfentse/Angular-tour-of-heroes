import { provideRouter, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];

