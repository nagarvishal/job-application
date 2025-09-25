import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobActivityComponent } from './job-activity.component';

describe('JobActivityComponent', () => {
  let component: JobActivityComponent;
  let fixture: ComponentFixture<JobActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
