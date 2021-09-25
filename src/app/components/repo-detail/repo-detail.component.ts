import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input() repoData: [] = [];

  repoName!: string;

  constructor() { 
    console.log(this.repoData)
  }

  ngOnInit(): void {
  }

}
