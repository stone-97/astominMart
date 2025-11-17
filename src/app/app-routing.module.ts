import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopcategoriesComponent } from './pages/shops/shopcategories/shopcategories.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
 {path: "", component: HomeComponent},
  {path: "index", component: HomeComponent},
  {path: "shopcategories", component:ShopcategoriesComponent}, 
  {path: "aboutus", component:AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
