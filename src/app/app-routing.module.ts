import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ComponentComponent } from './Pages/component/component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path:'content/:id',
    component: ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
