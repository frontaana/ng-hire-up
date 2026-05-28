import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeScreenerPageComponent } from '../resume-screener/components/resume-screener-page/resume-screener-page.component';

@Component({
  selector: 'lib-main-dashboard',
  standalone: true,
  imports: [CommonModule, ResumeScreenerPageComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {}
