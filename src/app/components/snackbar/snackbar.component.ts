import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() public message = '';
  public isShown = false;

  constructor() { }

  public ngOnInit(): void {
   
  }

  public showMessage(message: string): void {
    this.isShown = true;
    this.message = message;

    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }
}
