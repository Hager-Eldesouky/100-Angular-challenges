import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss'
})
export class PipeDocumentationComponent {
  public html = '<a href="https://www.YouTube.com" target="blank">YouTube </a>';
stringArray: string[]= ['Courses', 'YouTube', 'Twitter', 'LinkedIn'];
public objectArray: { [key: string]: string; }[] = [
  { content: 'Courses' },
  { content: 'YouTube' },
  { content: 'Twitter' },
  { content: 'LinkedIn' },
];
}
