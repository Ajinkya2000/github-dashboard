import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-language-tag',
  template: `
    <div class="container columns is-multiline mx-5 is-centered">
      <p *ngFor="let tag of tagsList" class="column is-centered is-2 tag is-info is-light m-1 mb-2">{{tag}}</p>
    </div>
  `,
  styles: [
  
  ]
})
export class LanguageTagComponent implements OnInit {
  @Input() tagsUrl!: string;
  tagsList!:string[]

  constructor(private _githubService: GithubService) { }

  ngOnInit(): void {
    this._githubService.getRepoLanguages(this.tagsUrl).subscribe(
      data => {
        this.tagsList = Object.keys(data);
        console.log(this.tagsList);
      });
  }

}
