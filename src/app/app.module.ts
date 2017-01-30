import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { routing , appRoutingProviders} from './app.routing';
import {  SourceArticlesComponent  } from './components/source-articles.component';
import {  ArticlesComponent } from './components/articles.component';
import {  ArticlesCategoryComponent } from './components/articles-category.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticlesComponent,
    SourceArticlesComponent,
    ArticlesCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
