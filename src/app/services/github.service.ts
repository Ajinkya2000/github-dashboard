import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = `http://api.github.com/users`;
  private config = {
    client_id: environment.clientID,
    client_secret: environment.clientSecret,
  };

  public userData: any = null;

  constructor(private http: HttpClient) {}

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getUser(username: string): Observable<{}> {
    const uri = `${this.apiUrl}/${username}`;
    return this.http
      .get<{}>(uri, {
        params: this.config,
      })
      .pipe(catchError(this.errorHandler));
  }

  getUserRepos(username: string): Observable<[]> {
    const uri = `${this.apiUrl}/${username}/repos`;
    return this.http
      .get<[]>(uri, { params: this.config })
      .pipe(catchError(this.errorHandler));
  }

  getRepoLanguages(tagsUrl: string): Observable<{}> {
    return this.http.get<{}>(tagsUrl, { params: this.config });
  }
}
