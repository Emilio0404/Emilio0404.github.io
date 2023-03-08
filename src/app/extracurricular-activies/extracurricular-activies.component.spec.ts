import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularActiviesComponent } from './extracurricular-activies.component';

describe('ExtracurricularActiviesComponent', () => {
  let component: ExtracurricularActiviesComponent;
  let fixture: ComponentFixture<ExtracurricularActiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtracurricularActiviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtracurricularActiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
