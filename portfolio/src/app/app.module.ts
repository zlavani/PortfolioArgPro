import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    AcercaDeComponent,
    AptitudesComponent,
    LogrosComponent,
    EducacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
