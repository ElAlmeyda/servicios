import { NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { ServiciosService } from './../servicios.service'


@Component({
    selector: 'app-lector',
    templateUrl: './app.lector.html',
    styleUrls: []
  })
  export class AppLector  implements OnInit{

    @Output () superheroe:string="";

    constructor(private _servicio:ServiciosService){
      
    }

    ngOnInit(){
      this._servicio.enviarSuperObservable.subscribe(superheroe=>
        this.superheroe = superheroe)
    }

    cambioSuperheroe(superheore:string){
      this._servicio.enviarSuperheroe(superheore);
    }
  
  }