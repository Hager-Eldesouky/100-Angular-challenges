import { Component } from '@angular/core';
import { FadeInOutAnimation } from './FadeInOutAnimation/fad-in-out.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss',

  animations: [FadeInOutAnimation]
})
export class OtherDocumentationComponent {
  public isInDom = true;
  public form: FormGroup = new FormGroup({});
  
  
  public submit(){
    this.form.reset(this.form.value);
  }
  constructor(private formbilder: FormBuilder) {
    this.form = this.formbilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });


  }
}
