import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LanguageTagComponent } from './language-tag.component';
import {GithubService} from '../../../services/github.service'

describe('LanguageTagComponent', () => {
  let component: LanguageTagComponent;
  let fixture: ComponentFixture<LanguageTagComponent>;
  let service: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageTagComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(GithubService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  })
});
