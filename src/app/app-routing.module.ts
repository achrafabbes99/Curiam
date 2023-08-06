import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [

{
  path:'',
  component:MainPageComponent
},
// {
//   path:'plans',
//   component:MainPageComponent
// },
// {
//   path:'avantages',
//   component:MainPageComponent
// },
// {
//   path:'service',
//   component:MainPageComponent
// }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
