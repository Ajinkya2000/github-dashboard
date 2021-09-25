import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _githubService: GithubService, private _router: Router) {}

  ngOnInit(): void {
    const userData = this._githubService.getUserData();
    if (userData === null) {
      this._router.navigateByUrl('/');
    }
  }
}
