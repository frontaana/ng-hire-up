import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'lib-mock-interview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mock-interview.component.html',
  styleUrl: './mock-interview.component.scss',
})
export class MockInterviewComponent {}
