import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  SourceArticlesComponent  } from './components/source-articles.component';

import {  ArticlesComponent } from './components/articles.component';
import {  ArticlesCategoryComponent  } from './components/articles-category.component';

const appRoutes: Routes = [
  {path:'' , component: ArticlesComponent },
  {path:'source/:name' , component: SourceArticlesComponent },
  {path:'category/:category' , component: ArticlesCategoryComponent },
  {path:'**' , redirectTo: '/' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
