import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class DashboardComponent implements OnInit, OnChanges {
  userData: any = null;
  icons = {
    faLink,
    faMapMarkerAlt,
    faTwitter,
  };
  twitterHandle: string = '';
  repos = [];
  loadingRepos: boolean = false;
  selectedValue: string = 'desc';
  limit: number= 10;

  constructor(private _githubService: GithubService, private _router: Router) {}

  ngOnInit(): void {
    this.userData = this._githubService.getUserData();
    if (this.userData === null) {
      this._router.navigateByUrl('/');
    } else {
      this.twitterHandle = `https://twitter.com/${this.userData.twitter_username}`;

      // Get Repos
      this._githubService
        .getUserRepos(this.userData.login, this.selectedValue, this.limit)
        .subscribe((data) => {
          this.repos = data;
          this.loadingRepos = true;
        });
    }
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change)
  }
}
