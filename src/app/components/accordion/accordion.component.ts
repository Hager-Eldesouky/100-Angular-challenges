import { Component } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
@Input() public items : AccordionItem[]=[];



public toggle( item :AccordionItem):void{
item.isExpanded=   !item.isExpanded;
}
}
