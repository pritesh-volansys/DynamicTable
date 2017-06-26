import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTemplateComponent } from "./DemoTemplate.component";


describe('StudentDetailComponent', () => {
  let component: DemoTemplateComponent;
  let fixture: ComponentFixture<DemoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
