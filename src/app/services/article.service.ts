import {Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Article} from '../models/article'
import {GLOBAL} from './global';



@Injectable()
export class ArticleService{

public url: string;

constructor(private _http: Http){

this.url = GLOBAL.url;

}


getArticles( ) {

return this._http.get(this.url + 'articles?source=the-next-web&sortBy=latest&apiKey=8e6c175db378493993454d24ccd5e3c7')
                    .map(res => res.json());


}

getSourceArticles(name: string ){

  return this._http.get(this.url + 'articles?source=' + name + '&sortBy=latest&apiKey=8e6c175db378493993454d24ccd5e3c7')
                      .map(res => res.json());

}

}
