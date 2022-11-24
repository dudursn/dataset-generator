import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDatasetComponent } from './generate-dataset.component';

describe('GenerateDatasetComponent', () => {
  let component: GenerateDatasetComponent;
  let fixture: ComponentFixture<GenerateDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
