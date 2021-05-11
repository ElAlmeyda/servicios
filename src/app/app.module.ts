import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFinal } from './componentes/app.detalle';
import { AppLector } from './componentes/app.lector';
import { AppMostrar } from './componentes/app.mostrar';
import { ServiciosService } from './servicios.service';


@NgModule({
  declarations: [
    AppComponent,
    AppMostrar,
    AppLector,
    AppFinal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
