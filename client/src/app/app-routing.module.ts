import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CategoryComponent } from './category/category.component'
import { ViewItemComponent } from './view-item/view-item.component'



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'category/:name', component: CategoryComponent
  },
  {
    path: 'view/:itemId', component: ViewItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
