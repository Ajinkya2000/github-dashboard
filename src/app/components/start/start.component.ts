import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  username: string = '';
  error: string = '';

  constructor(private _githubService: GithubService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this._githubService.getUser(this.username).subscribe(
      (res) => this.handleResponse(res),
      (err) => this.handleError(err),
      () => this.handleComplete()
    );
  }

  handleResponse(res: {}) {
    console.log(res);
    this._githubService.setUserData(res);
    this._router.navigateByUrl('/dashboard');
  }

  handleError(err: HttpErrorResponse) {
    this.error = err.error.message;
  }

  handleComplete() {
    this.username = '';
  }
}
