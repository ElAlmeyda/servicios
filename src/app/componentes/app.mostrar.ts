import { Component, Input } from '@angular/core';
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
    @ Input () superheroe:string ="";
    @Input () lista: List[] = [];

    constructor(public _servicio:ServiciosService){
      
    }


    ngOnInit(){
    }

    addList(){
      this.superheroe = this._servicio.superheroe;
      this.lista = this._servicio.addSuperheore(this.superheroe);
    }
    
  }
