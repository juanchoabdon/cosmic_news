import { Component , OnInit } from '@angular/core';
import {  Router , ActivatedRoute, Params} from '@angular/router';
import {ArticleService } from '../services/article.service';
import {Article} from '../models/article';
import {Source} from '../models/source';
import {MenuService } from '../services/menu.service';

@Component({
  selector: 'articles-category',
  templateUrl: '../views/articles-category.html',
  providers: [ArticleService, MenuService]

})

export class ArticlesCategoryComponent implements OnInit {


public articles: Article[];
public errorMessage: any;
public loading: boolean;
public category: any;


constructor(
  private _route: ActivatedRoute,
  private _router: Router,
  private _articleService: ArticleService,
  private _menuService: MenuService,
) {



}
ngOnInit( ){
  this.getCategoryArticles();


}

getCategoryArticles() {

this.loading = true;
 this._route.params.forEach((params: Params) =>  {
   this.articles = [];
   let category = params['category']
       this.category = category;
       this._menuService.getSources(this.category).subscribe(

       result => {


            var sources  = result.sources;


            for (var source of sources){

              this._articleService.getSourceArticles(source.id).subscribe(
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


   });

   this.loading = false;
   console.log(this.articles)


   }

}
