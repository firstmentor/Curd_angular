import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrestoComponent } from './showresto.component';

describe('ShowrestoComponent', () => {
  let component: ShowrestoComponent;
  let fixture: ComponentFixture<ShowrestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
