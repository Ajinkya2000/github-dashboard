import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise changeCurrentPage when pageChange is called', () => {
    component.pageData = {
      first: { page: 1 },
      next: { page: 2 },
      last: { page: 3 },
    };

    let data:any = null;
    component.changeCurrentPage.subscribe((page) => {
      data = page;
    });

    component.pageChange('first');
    expect(data).toBe(component.pageData.first.page);

    component.pageChange('next');
    expect(data).toBe(component.pageData.next.page);

    component.pageChange('last');
    expect(data).toBe(component.pageData.last.page);
  });
});
