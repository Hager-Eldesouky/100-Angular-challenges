import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  
})
export class CardComponent {
@Input() public title ='';
@Input() public subtitle ='';
@Input() public iconClasses ='';
}
