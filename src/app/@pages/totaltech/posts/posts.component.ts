import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  comments:Comment[]; 
  displayedColumns: string[] = ['name', 'email', 'body'];
  findbyIdControl = new FormControl('');

  constructor(private readonly _postsService: PostsService) { }

  ngOnInit(): void {
    this.listenControls();
  }

  private listenControls() {
    this.findbyIdControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe((id: number) => this.findById(id));
  }


  private findById(id: number) {
    this._postsService.getCommentsByPostId(id).subscribe((comments:Comment[])=> this.comments =  comments);
  }
}
