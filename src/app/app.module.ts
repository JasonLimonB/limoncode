import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ApiconsumoComponent } from './components/apiconsumo/apiconsumo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TerminosComponent } from './components/terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ApiconsumoComponent,
    ContactoComponent,
    RegistroComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
