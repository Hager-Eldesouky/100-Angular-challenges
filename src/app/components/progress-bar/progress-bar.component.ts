import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
@Input() public value =0 ;
@Input() public max = 100;
}
