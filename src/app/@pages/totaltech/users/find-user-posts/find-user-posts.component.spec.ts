import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserPostsComponent } from './find-user-posts.component';

describe('FindUserPostsComponent', () => {
  let component: FindUserPostsComponent;
  let fixture: ComponentFixture<FindUserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
