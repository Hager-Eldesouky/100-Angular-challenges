import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;

  public minusOne(): void {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  public addOne(): void {
    if (this.max > this.counter) {
      this.counter++;
    }
  }

}
