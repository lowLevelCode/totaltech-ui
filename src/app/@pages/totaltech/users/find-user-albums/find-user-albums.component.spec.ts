import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserAlbumsComponent } from './find-user-albums.component';

describe('FindUserAlbumsComponent', () => {
  let component: FindUserAlbumsComponent;
  let fixture: ComponentFixture<FindUserAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
