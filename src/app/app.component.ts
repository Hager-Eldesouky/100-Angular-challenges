import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-brands-svg-icons'
import { AccordionItem } from './components/accordion/accordion-item.interface';
import { TitleService } from './other/other-documentation/TitleChanging/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(public titleService: TitleService) { }
  ngOnInit(): void {


    this.titleService.initializeTitleService();
  }

}
