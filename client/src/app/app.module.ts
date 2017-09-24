import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidebarComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ApiService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
