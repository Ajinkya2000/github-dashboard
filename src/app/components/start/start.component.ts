import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  username: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.username);
    this.githubService
      .getUser(this.username)
      .subscribe((user) => console.log(user));

    this.username = '';
  }
}
