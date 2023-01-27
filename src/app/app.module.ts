import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [ //Componentes directivas y pipes
    AppComponent,
    ReactiveFormComponent
  ],
  imports: [ //Modulos
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
