import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotaltechComponent } from './totaltech.component';

const routes: Routes = [
  {
    path: '',
    component: TotaltechComponent,
    children: [
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotaltechRoutingModule { }
