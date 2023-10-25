import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

// lazy-loading routing
export const APP_ROUTE: Route[] = [
  {path: 'home', loadComponent: () =>
  import('./home/home.component').then((c) => c.HomeComponent)},
  {path: 'careers', loadComponent: () =>
  import('./careers/careers.component').then((c) => c.CareersComponent)},
  {path: 'expense', loadComponent: () =>
  import('./expense-details/expense-details.component').then((c) => c.ExpenseDetailsComponent)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

