import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

// Exporting the routes to be able to load the homepage component
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];


