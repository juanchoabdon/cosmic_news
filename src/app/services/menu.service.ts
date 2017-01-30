import {Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Source} from '../models/source'
import {GLOBAL} from './global';


@Injectable()
export class MenuService{

public url: string;

constructor(private _http: Http){

this.url = GLOBAL.url;

}


getSources( category: string ) {
if(category == '') {
return this._http.get(this.url + 'sources')
                    .map(res => res.json());
} else {

  return this._http.get(this.url + 'sources?category=' + category)
                      .map(res => res.json());

}

}



}
