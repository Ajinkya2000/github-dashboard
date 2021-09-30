import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  userData: any = null;

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

  getUser(username: string): Observable<any> {
    const url = `${environment.baseURL}/user/${username}`;
    return this.http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  getUserRepos(username: string, direction: string, limit: number, page: number): Observable<any> {
    const url = `${environment.baseURL}/repos`;
    return this.http
      .post<any>(url, { direction, limit, username, page}, { observe: 'response' })
      .pipe(catchError(this.errorHandler));
  }

  getRepoLanguages(tagsUrl: string): Observable<any> {
    const url = `${environment.baseURL}/tags`;
    return this.http.post<any>(url, { tagsUrl });
  }

  getSearchRepos(term: string, username: string, direction: string, limit: number, page: number): Observable<any> {
    const url = `${environment.baseURL}/search`;
    const params = {term, username, direction, limit, page};
    return this.http.post(url, params);
  }
}
