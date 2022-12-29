import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 2:12 
import { RouterModule, Routes } from '@angular/router';

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
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ProyectoItemComponent } from './componentes/proyecto-item/proyecto-item.component';
import { AgregarProyectoComponent } from './componentes/agregar-proyecto/agregar-proyecto.component';
import { FormsModule } from '@angular/forms';
import { InfoProyectosComponent } from './componentes/info-proyectos/info-proyectos.component';
import { InfoGeneralComponent } from './componentes/info-general/info-general.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  // { path: '', component: AcercaDeComponent },
  { path: 'infogeneral', component: InfoGeneralComponent },

  { path: 'infoproyectos', component: InfoProyectosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    AcercaDeComponent,
    AptitudesComponent,
    LogrosComponent,
    EducacionComponent,
    FooterComponent,
    ProyectosComponent,
    ProyectoItemComponent,
    AgregarProyectoComponent,
    InfoProyectosComponent,
    InfoGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
