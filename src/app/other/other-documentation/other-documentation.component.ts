import { Component } from '@angular/core';
import { FadeInOutAnimation } from './FadeInOutAnimation/fad-in-out.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from './snackbar-service/snackbar.service';
import { slideRightAnimation } from './slideRightAnimation/slide-right.animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss',

  animations: [FadeInOutAnimation , slideRightAnimation]
})
export class OtherDocumentationComponent {
  public state: { [key: string]: any } = {};
 
  
  
  public selectedTab = 0;
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  
  
  public isInDom = true;
  public form: FormGroup = new FormGroup({});


  public submit() {
    this.form.reset(this.form.value);
  }
  constructor(private formbilder: FormBuilder  , public snackbarService :SnackbarService) {
    this.form = this.formbilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });


  }


  public callSnackbar(): void {
  this.snackbarService.callSnackbar('snackbar service example')
  }
}
