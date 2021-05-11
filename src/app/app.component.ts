import { Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiciosService } from './servicios.service';

class List{
  superheroe:string="";

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  superheroe:string="";
  lista:List[] = [];
  
constructor(public _servicio:ServiciosService){}

ngOnInit(){}

}
