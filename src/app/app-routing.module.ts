import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'totaltech', pathMatch: 'full' },
  { path: 'totaltech', loadChildren: () => import('./@pages/totaltech/totaltech.module').then(m => m.TotaltechModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
