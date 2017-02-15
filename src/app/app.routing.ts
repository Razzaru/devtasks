import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {HomeComponent} from './components/pages/home/home.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {StatisticsComponent} from './components/pages/statistics/statistics.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
