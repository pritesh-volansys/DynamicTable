import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynDataTableComponent } from "../DynDataTable/DynDataTable";





describe('DynDTComponent', () => {
  let component: DynDataTableComponent;
  let fixture: ComponentFixture<DynDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
