import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ServiceComponent } from './service/service.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { AvantagesComponent } from './avantages/avantages.component';

const routes: Routes = [

{
  path:'',
  component:MainPageComponent
},
{
  path:'tarifs',
  component:TarifsComponent
},
{
  path:'avantages',
  component:AvantagesComponent
},
{
  path:'service',
  component:ServiceComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
