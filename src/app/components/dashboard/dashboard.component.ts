import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { GithubService } from 'src/app/services/github.service';

import { faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userData: any = null;
  icons = {
    faLink,
    faMapMarkerAlt,
    faTwitter,
  };
  twitterHandle: string = '';
  repos = [];
  nextPage: any;
  lastPage: any;
  loadingRepos: boolean = false;
  selectedValue: string = 'desc';
  limit: number = 10;

  constructor(private _githubService: GithubService, private _router: Router) {}

  getRepos() {
    this._githubService
      .getUserRepos(this.userData.login, this.selectedValue, this.limit)
      .subscribe(({ body }) => {
        this.repos = body.data;
        this.nextPage = body.nextPage;
        this.lastPage = body.lastPage;
        this.loadingRepos = true;
      });
  }

  ngOnInit(): void {
    this.userData = this._githubService.getUserData();
    if (this.userData === null) {
      this._router.navigateByUrl('/');
    } else {
      this.twitterHandle = `https://twitter.com/${this.userData.twitter_username}`;
      this.getRepos();
    }
  }

  onSelectedValueChange(value: string) {
    console.log(value)
    this.loadingRepos = false;
    this.selectedValue = value;
    this.getRepos();
  }

  onLimitChange(value: number) {
    this.loadingRepos = false;
    this.limit = value;
    this.getRepos();
  }
}
