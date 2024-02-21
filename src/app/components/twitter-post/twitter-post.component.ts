import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrl: './twitter-post.component.scss'
})
export class TwitterPostComponent {
  @Input() public baseHref = 'https://www.DylanIsrael.com';
  @Input() public hashTags: string[] = ['DylanIsrael', 'JavaScript', 'TypeScript', 'Angular', '100 Angular Challenge'];

  constructor(public titleService: Title) { }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} `);

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}&text=`;
  }
}
