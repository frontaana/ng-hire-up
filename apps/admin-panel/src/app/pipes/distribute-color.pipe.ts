import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distributeColor',
  standalone: true,
})
export class DistributeColorPipe implements PipeTransform {
  transform(index: number, offset: number): string {
    // Золотое сечение помогает избежать повторов в палитре
    const hue = (index * 137.5 + offset) % 360;

    return `hsl(${hue}, 60%, 90%)`;
  }
}
