import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'http://api.github.com/users';

  public userData: any = null;

  constructor(private http: HttpClient) {}

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  getUser(username: string): Observable<{}> {
    return this.http.get<{}>(`${this.apiUrl}/${username}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
