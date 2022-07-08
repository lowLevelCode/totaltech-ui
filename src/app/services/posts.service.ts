import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostsService {
    url: string = environment.hostUrl;

    constructor(private readonly _httpClient: HttpClient) { }

    getCommentsByPostId(id: number): Observable<Comment[]> {
        return this._httpClient.get<Comment[]>(`${this.url}/post/${id}/comments`);
    }
}