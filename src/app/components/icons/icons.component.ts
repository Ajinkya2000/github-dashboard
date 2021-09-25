import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  template: `
  <span>
    <fa-icon [icon]="icon" class="'is-size-'+ size"></fa-icon>
</span>
  `,
  styles: [
    'span {display: inline-block; width: 20px}'
  ]
})
export class IconsComponent implements OnInit {
  @Input() icon: any;
  @Input() size: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
