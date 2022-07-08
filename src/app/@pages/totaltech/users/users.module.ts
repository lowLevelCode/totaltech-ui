import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from "../../../services/users.service";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { FindUserPostsComponent } from './find-user-posts/find-user-posts.component';
import { FindUserAlbumsComponent } from './find-user-albums/find-user-albums.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [UsersComponent, UserAlbumsComponent, UserPostsComponent, FindUserPostsComponent, FindUserAlbumsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,    
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
