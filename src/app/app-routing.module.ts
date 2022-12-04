import { DetalheComponent } from './detalhe/detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'detalhe/:id', component: DetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
