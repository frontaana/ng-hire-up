import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterviewToolsComponent } from './interview-tools.component';

describe('InterviewToolsComponent', () => {
  let component: InterviewToolsComponent;
  let fixture: ComponentFixture<InterviewToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
