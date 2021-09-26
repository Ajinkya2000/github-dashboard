import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() pageData: any;
  @Input() loadingRepos!: boolean;

  @Output() changeCurrentPage: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pageChange(type: string) {
    switch (type) {
      case 'first':
        return this.changeCurrentPage.emit(this.pageData.first.page);
      case 'prev':
        return this.changeCurrentPage.emit(this.pageData.prev.page);
      case 'next':
        return this.changeCurrentPage.emit(this.pageData.next.page);
      case 'last':
        return this.changeCurrentPage.emit(this.pageData.last.page);
    }
  }
}
