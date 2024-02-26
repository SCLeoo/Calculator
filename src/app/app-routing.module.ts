import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './pages/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '404', component: NotFound404Component},
  { path: 'calculator', loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule) },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
