import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.scss'
})
export class LoaderSpinnerComponent {
@Input() public isLoading = false;
}
