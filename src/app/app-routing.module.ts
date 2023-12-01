import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AccueilComponent } from './components/accueil/accueil.component';

export const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "apropos", component: AProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
