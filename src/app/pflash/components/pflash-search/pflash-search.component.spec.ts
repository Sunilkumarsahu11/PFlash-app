import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PflashSearchComponent } from './pflash-search.component';

describe('PflashSearchComponent', () => {
  let component: PflashSearchComponent;
  let fixture: ComponentFixture<PflashSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PflashSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PflashSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
