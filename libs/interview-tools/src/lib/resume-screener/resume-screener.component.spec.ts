import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeScreenerComponent } from './resume-screener.component';

describe('ResumeScreenerComponent', () => {
  let component: ResumeScreenerComponent;
  let fixture: ComponentFixture<ResumeScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeScreenerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
