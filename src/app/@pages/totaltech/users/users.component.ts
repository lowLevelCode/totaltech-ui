import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'phone', 'actions'];
  users: User[];

  constructor(
    private readonly _router: Router,
    private readonly _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((users: User[]) => this.users = users);
  }

  onFindAlbumsByUserId() {
    this._router.navigate([`totaltech/users/find-albums-by-id`])
  }

  onFindPostsByUserId() {
    this._router.navigate([`totaltech/users/find-posts-by-id`])
  }

  onSearchUserAlbumsById(id: number) {
    this._router.navigate([`totaltech/users/${id}/albums`])
  }

  onSearchUserPostById(id: number) {
    this._router.navigate([`totaltech/users/${id}/posts`])
  }

}
