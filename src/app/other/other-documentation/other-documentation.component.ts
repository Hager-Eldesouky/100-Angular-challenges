import { Component } from '@angular/core';
import { FadeInOutAnimation } from './FadeInOutAnimation/fad-in-out.animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss',

  animations:[FadeInOutAnimation]
})
export class OtherDocumentationComponent {
  public isInDom = true;
}
