import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  posts: Post[];  
  displayedColumns:string[] = ['id','title'];

  constructor(
    private readonly _activeRoute: ActivatedRoute,
    private readonly _userService: UsersService) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._userService.getPostsByUserId(id).subscribe((posts: Post[]) => this.posts = posts)
  }

}
