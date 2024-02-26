import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss'
})
export class ComponentDocumentationComponent {
  public accordionItem :AccordionItem[]=[
    { title:'example1',
     content:'exampled contetdddd1',
     isExpanded:false},
     
     
     { title:'example2',
     content:'exampled conte2222222',
     isExpanded:false},
    
    
  
    ];
  
  
    public progressValue =25;
    public toggleValue =true;


    public debounceExampleMethod(value: string): void {
      console.log('Component Documentation', value);
    }
    public tabs: { title: string, active: boolean }[] = [
      { title: 'Tab 1', active: true },
      { title: 'Tab 2', active: false },
    ];
    public selectedTab =0;
  
}
