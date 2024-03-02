import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of, delay } from 'rxjs';
import { SnackbarService } from '../../other/other-documentation/snackbar-service/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent implements OnInit {
  @Input() public message = '';
  public isShown = false;

  constructor( public snackbarService :SnackbarService) { }

  public ngOnInit(): void {
   this.snackbarService.snackbar$.subscribe((value)=>{
    this.message=value;
    this.showMessage(value)
   })
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
