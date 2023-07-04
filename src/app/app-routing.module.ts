import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component:IndexComponent}, //si escribo index voy a trabajar con el componente que dice IndexComponent
  {path: 'dashboard', component:DashboardComponent}, //es la ruta que sigue el usuario
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
