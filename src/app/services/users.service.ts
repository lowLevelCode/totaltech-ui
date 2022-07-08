import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from "../interfaces/user";
import { Album } from "../interfaces/album";
import { Post} from "../interfaces/post";

@Injectable()
export class UsersService {

    url: string = environment.hostUrl;

    constructor(private readonly _httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>(`${this.url}/users`);
    }

    getAlbumsByUserId(id: number): Observable<Album[]> {
        return this._httpClient.get<Album[]>(`${this.url}/user/${id}/albums`);
    }

    getPostsByUserId(id: number): Observable<Post[]> {
        return this._httpClient.get<Post[]>(`${this.url}/user/${id}/posts`);
    }
}