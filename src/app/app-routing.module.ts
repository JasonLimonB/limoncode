import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiconsumoComponent } from './components/apiconsumo/apiconsumo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'apiconsumo', component: ApiconsumoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
