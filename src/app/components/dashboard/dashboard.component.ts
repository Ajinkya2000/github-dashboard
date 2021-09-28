import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Types
import { repoType } from '../../../types/repoType';

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
  repos: Partial<repoType[]> = [];
  currentPage: number = 1;
  pageData = {};
  loadingRepos: boolean = false;
  selectedValue: string = 'desc';
  limit: number = 10;
  searchTerm: string = '';

  constructor(private _githubService: GithubService, private _router: Router) {}

  getRepos() {
    this._githubService
      .getUserRepos(
        this.userData.login,
        this.selectedValue,
        this.limit,
        this.currentPage
      )
      .subscribe(({ body: { data, ...pageData } }) => {
        this.repos = data;
        this.pageData = pageData;
        this.loadingRepos = true;
      });
  }

  getSearchRepos() {
    this._githubService
      .getSearchRepos(
        this.searchTerm,
        this.userData.login,
        this.selectedValue,
        this.limit,
        this.currentPage
      )
      .subscribe(({data, ...pageData}) => {
        this.repos = data;
        this.pageData = pageData;
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
    this.loadingRepos = false;
    this.selectedValue = value;
    this.getRepos();
  }

  onLimitChange(value: number) {
    this.loadingRepos = false;
    this.limit = value;
    this.currentPage = 1;
    this.getRepos();
  }

  getNextPage(page: number) {
    this.currentPage = page;
    this.getRepos();
  }

  renderNewPage(page: number) {
    this.loadingRepos = false;
    this.currentPage = page;
    this.getRepos();
  }

  checkSearch(term: string) {
    if (term !== "") {
      this.searchTerm = term;
    } else {
      this.loadingRepos = false;
      this.getRepos();
    }
  }

  filterRepo() {
    if (this.searchTerm !== "") {
      this.loadingRepos = false;
      this.getSearchRepos();
    }
  }
}
