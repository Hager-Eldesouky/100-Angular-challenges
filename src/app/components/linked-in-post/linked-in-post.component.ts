import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linked-in-post',
  templateUrl: './linked-in-post.component.html',
  styleUrl: './linked-in-post.component.scss'
})
export class LinkedInPostComponent {

  

  constructor(public router: Router) { }

  public get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://github.com/Hager-Eldesouky/Recipes-Angular${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
