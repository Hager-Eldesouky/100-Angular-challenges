import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-email',
  templateUrl: './reactive-forms-email.component.html',
  styleUrl: './reactive-forms-email.component.scss'
})
export class ReactiveFormsEmailComponent {
  public form: FormGroup=new FormGroup({});


  constructor(private formbilder: FormBuilder) {
    this.InitalForm();
  }


  private InitalForm() {
    this.form = this.formbilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    })
  }
  public submitMessage (){
    console.log('it worked')
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.form.controls;
}
}
