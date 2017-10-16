import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsFormComponent } from './concerts-form.component';

describe('ConcertsFormComponent', () => {
  let component: ConcertsFormComponent;
  let fixture: ComponentFixture<ConcertsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertsFormComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
