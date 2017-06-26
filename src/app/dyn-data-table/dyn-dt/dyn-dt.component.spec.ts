import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynDTComponent } from './dyn-dt.component';

describe('DynDTComponent', () => {
  let component: DynDTComponent;
  let fixture: ComponentFixture<DynDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
