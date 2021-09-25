import { Component, OnInit } from '@angular/core';
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
  userData: any = {};
  icons = {
    faLink,
    faMapMarkerAlt,
    faTwitter,
  };
  twitterHandle: string = '';

  constructor(private _githubService: GithubService, private _router: Router) {}

  ngOnInit(): void {
    this.userData = this._githubService.getUserData();
    if (this.userData === null) {
      this._router.navigateByUrl('/');
    }

    this.twitterHandle = `https://twitter.com/${this.userData.twitter_username}`;
  }
}
