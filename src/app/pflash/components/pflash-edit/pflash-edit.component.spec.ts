import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PflashEditComponent } from './pflash-edit.component';

describe('PflashEditComponent', () => {
  let component: PflashEditComponent;
  let fixture: ComponentFixture<PflashEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PflashEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PflashEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
