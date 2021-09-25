import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { GithubService } from '../../services/github.service';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  username: string = '';
  error: string = '';
  loading: boolean = false;
  faGithub = faGithub

  constructor(private _githubService: GithubService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this._githubService.getUser(this.username).subscribe(
      (res) => this.handleResponse(res),
      (err) => this.handleError(err),
      () => this.handleComplete()
    );
  }

  handleResponse(res: {}) {
    this._githubService.setUserData(res);
    this._router.navigateByUrl('/dashboard');
  }

  handleError(err: HttpErrorResponse) {
    this.error = err.error.message;
    this.loading = false;
  }

  handleComplete() {
    this.loading = false;
    this.username = '';
  }
}
