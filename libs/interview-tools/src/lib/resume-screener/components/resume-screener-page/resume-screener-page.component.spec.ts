import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeScreenerPageComponent } from './resume-screener-page.component';

describe('ResumeScreenerPageComponent', () => {
  let component: ResumeScreenerPageComponent;
  let fixture: ComponentFixture<ResumeScreenerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeScreenerPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeScreenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
