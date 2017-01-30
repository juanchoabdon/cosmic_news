import { Component , OnInit } from '@angular/core';
import {  Router , ActivatedRoute, Params} from '@angular/router';
import {ArticleService } from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'source-articles',
  templateUrl: '../views/source-articles.html',
  providers: [ArticleService]

})

export class SourceArticlesComponent implements OnInit {


public name: string;
public articles: Article[];
public errorMessage: any;
public loading: boolean;


constructor(
  private _route: ActivatedRoute,
  private _router: Router,
  private _articleService: ArticleService
) {



}
ngOnInit( ){
  this.getSourceArticles();

}

getSourceArticles() {

this.loading = true;
 this._route.params.forEach((params: Params) =>  {
   let name = params['name']
       this.name = name;
       this._articleService.getSourceArticles(name).subscribe(
         result => {
              this.articles = result.articles;

              if(!this.articles) {  alert('Error en el servidor')}
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
