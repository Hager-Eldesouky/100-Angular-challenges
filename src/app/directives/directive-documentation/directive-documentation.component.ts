import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrl: './directive-documentation.component.scss'
})
export class DirectiveDocumentationComponent {

  public log(){
    console.log('hallo world')
  }
}
