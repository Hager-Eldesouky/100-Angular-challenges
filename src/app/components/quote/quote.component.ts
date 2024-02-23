import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  @Input() public quote =''
  @Input() public author =''
  @Input() public occupation =''
}
