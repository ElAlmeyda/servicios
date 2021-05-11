import { Component } from '@angular/core';
import { ServiciosService } from './../servicios.service'

class List {
  superheroe: string = "";
}

@Component({
    selector: "app-mostrar",
    templateUrl: './app.mostrar.html',
    styleUrls: []
  })

  export class AppMostrar {
    superheroe:string ="";
    aux:string="";
    lista: List[] = [];

    constructor(public _servicio:ServiciosService){
      
    }


    ngOnInit(){
      this.lista = this._servicio.lista;
    }
    
  }
