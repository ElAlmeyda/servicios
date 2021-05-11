import { Component, Input, Output } from '@angular/core';
import { ServiciosService } from './../servicios.service'

class List{
  superheroe:string="";
}

@Component({
  selector: "app-detalles",
  templateUrl: "./app.detalles.html",
  styleUrls: ["./app.detalles.css"]
})

  export class AppFinal {

    @Input () superheroe:string="";
    @Output() lista:List[] = [];

    constructor(private _servicio:ServiciosService){
      
    }

    ngOnInit(){
      this._servicio.enviarSuperObservable.subscribe(superheroe=>
        this.superheroe = superheroe)
    }

    addList(){
      this.lista = this._servicio.addSuperheore();
    }

  }