import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


class List{
  superheroe:string="";

}

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  superheroe:string="";
  private enviarSuperSubject = new Subject<string>();
  enviarSuperObservable =this.enviarSuperSubject.asObservable();
  lista:List[] = [];

  constructor() {}

  enviarSuperheroe(superheore:string){
    this.superheroe = superheore;
    this.enviarSuperSubject.next(superheore);
  }

  addSuperheore() : List[]{
        this.lista.push({
          superheroe: this.superheroe
        });
        return this.lista
      }
  
}
