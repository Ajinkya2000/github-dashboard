import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'http://api.github.com/users'
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${username}`)
  }
}
