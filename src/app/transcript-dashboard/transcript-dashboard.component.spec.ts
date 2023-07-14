import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptDashboardComponent } from './transcript-dashboard.component';

describe('TranscriptDashboardComponent', () => {
  let component: TranscriptDashboardComponent;
  let fixture: ComponentFixture<TranscriptDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscriptDashboardComponent]
    });
    fixture = TestBed.createComponent(TranscriptDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
