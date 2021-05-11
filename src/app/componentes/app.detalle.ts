import { Component, Input, Output } from '@angular/core';
import { ServiciosService } from './../servicios.service'


@Component({
  selector: "app-detalles",
  templateUrl: "./app.detalles.html",
  styleUrls: ["./app.detalles.css"]
})

  export class AppFinal {

    @Input () superheroe:string="";

    constructor(private _servicio:ServiciosService){
      
    }

    ngOnInit(){
      this._servicio.enviarSuperObservable.subscribe(superheroe=>
        this.superheroe = superheroe)
    }


  }