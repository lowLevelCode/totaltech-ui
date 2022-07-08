import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Album } from 'src/app/interfaces/album';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find-user-albums',
  templateUrl: './find-user-albums.component.html',
  styleUrls: ['./find-user-albums.component.scss']
})
export class FindUserAlbumsComponent implements OnInit {

  albums: Album[];
  displayedColumns: string[] = ['id', 'title'];
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
    this._usersService.getAlbumsByUserId(id).subscribe((albums: Album[]) => this.albums = albums);
  }

}
