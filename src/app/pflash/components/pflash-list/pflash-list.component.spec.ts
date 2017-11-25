import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PflashListComponent } from './pflash-list.component';

describe('PflashListComponent', () => {
  let component: PflashListComponent;
  let fixture: ComponentFixture<PflashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PflashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PflashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
