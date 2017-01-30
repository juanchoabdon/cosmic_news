import { Component , OnInit } from '@angular/core';
import {  Router , ActivatedRoute, Params} from '@angular/router';
import {ArticleService } from '../services/article.service';
import {MenuService } from '../services/menu.service';
import {Article} from '../models/article';


@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  providers: [ArticleService,MenuService]

})

export class ArticlesComponent implements OnInit {

public title: string;
public articles: Article[] = [];
public categories: any[] = ['business', 'entertainment','gaming','science-and-nature','technology'];
public errorMessage: any;


constructor(
  private _route: ActivatedRoute,
  private _router: Router,
  private _articleService: ArticleService,
  private _menuService: MenuService,

) {



}
ngOnInit( ){
  this.getArticles();
  console.log("Componente de articulos home cargados");
}

getArticles() {

 for(var index_categorie in this.categories) {

  this._menuService.getSources(this.categories[index_categorie]).subscribe(

  result => {


       var sources  = result.sources;
       this.articles = [];
       if(sources == '') {  alert('Error en el servidor')}

       for (var index_source in sources){

         this._articleService.getSourceArticles(sources[index_source].id).subscribe(
           result => {
             for( var article of result.articles) {
                article['author'] = result.source;

               }
                this.articles.push.apply(this.articles, result.articles)

                if(!this.articles) {  alert('Error en el servidor')}
             },

            error => {
                this.errorMessage = <any>error;
              }

                );


       }


    },

   error => {
       this.errorMessage = <any>error;
     }

       );

     }

   }

}
