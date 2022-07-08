import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltechComponent } from './totaltech.component';

describe('TotaltechComponent', () => {
  let component: TotaltechComponent;
  let fixture: ComponentFixture<TotaltechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaltechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
