import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindUserAlbumsComponent } from './find-user-albums/find-user-albums.component';
import { FindUserPostsComponent } from './find-user-posts/find-user-posts.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id/albums', component: UserAlbumsComponent },
  { path: ':id/posts', component: UserPostsComponent },
  { path: 'find-albums-by-id', component: FindUserAlbumsComponent },
  { path: 'find-posts-by-id', component: FindUserPostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
