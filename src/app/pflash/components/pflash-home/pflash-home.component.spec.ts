import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PflashHomeComponent } from './pflash-home.component';

describe('PflashHomeComponent', () => {
  let component: PflashHomeComponent;
  let fixture: ComponentFixture<PflashHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PflashHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PflashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
