import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartComponent } from './start.component';
import { GithubService } from '../../services/github.service';
import { from } from 'rxjs';

describe('StartComponent', () => {
  let component: StartComponent;
  let service: GithubService
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GithubService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(GithubService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user data after submitting', () => {
    component.username = "user";
    const userData = [{name: 'user'}]


    spyOn(service, 'getUser').and.callFake(() => {
      return from(userData);
    })

    component.onSubmit();
    expect(service.userData).toBeTruthy();
  })
});
