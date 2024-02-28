import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrl: './banner-cut-out.component.scss'
})
export class BannerCutOutComponent {
  @Input() public imageUrl = 'assets/images/featured.png';
  @Input() public title =  'Angular Challenges';
}
