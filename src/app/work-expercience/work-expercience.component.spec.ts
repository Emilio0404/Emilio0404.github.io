import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpercienceComponent } from './work-expercience.component';

describe('WorkExpercienceComponent', () => {
  let component: WorkExpercienceComponent;
  let fixture: ComponentFixture<WorkExpercienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExpercienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExpercienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
