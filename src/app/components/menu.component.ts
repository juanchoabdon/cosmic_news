import { Component , OnInit } from '@angular/core';
import {MenuService } from '../services/menu.service';
import {Source} from '../models/source';
@Component({
  selector: 'cosmic-menu',
  templateUrl: '../views/menu.html',
  providers: [MenuService]

})
export class MenuComponent implements OnInit{

  public categories: any[] = ['business', 'entertainment', 'gaming', 'general', 'music', 'science-and-nature', 'sport', 'technology']
  public sources: Source[];
  public errorMessage: any;


  constructor(

    private _menuService: MenuService
  ) {



  }

  ngOnInit( ){
    this.getSources();
    console.log("Componente menu cargado");
  }

  getSources() {

    this._menuService.getSources('').subscribe(

    result => {

         this.sources = result.sources;


         if(!this.sources) {  alert('Error en el servidor')}
      },

     error => {
         this.errorMessage = <any>error;
       }

         );

     }

}
