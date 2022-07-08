import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Post } from 'src/app/interfaces/post';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find-user-posts',
  templateUrl: './find-user-posts.component.html',
  styleUrls: ['./find-user-posts.component.scss']
})
export class FindUserPostsComponent implements OnInit {

  posts: Post[];
  displayedColumns: string[] = ['title', 'body'];
  findbyIdControl = new FormControl('');

  constructor(private readonly _usersService: UsersService) { }

  ngOnInit(): void {
    this.listenControls();
  }

  private listenControls() {
    this.findbyIdControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((id: number) => this.findById(id));
  }


  private findById(id: number) {
    this._usersService.getPostsByUserId(id).subscribe((posts: Post[]) => this.posts = posts);
  }

}
