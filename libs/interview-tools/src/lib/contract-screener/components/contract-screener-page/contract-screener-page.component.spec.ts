import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractScreenerPageComponent } from './contract-screener-page.component';

describe('ContractScreenerPageComponent', () => {
  let component: ContractScreenerPageComponent;
  let fixture: ComponentFixture<ContractScreenerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractScreenerPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractScreenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
