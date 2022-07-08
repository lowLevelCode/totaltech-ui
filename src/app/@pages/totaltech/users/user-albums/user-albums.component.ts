import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Album } from "../../../../interfaces/album";

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  albums: Album[];

  displayedColumns: string[] = ['id', 'title'];

  constructor(
    private readonly _activeRoute: ActivatedRoute,
    private readonly _usersService: UsersService) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._usersService.getAlbumsByUserId(id).subscribe((albums: Album[]) => this.albums = albums);
  }

}
