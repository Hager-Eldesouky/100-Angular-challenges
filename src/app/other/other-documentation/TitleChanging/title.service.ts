import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(public title: Title, public router: Router, public activatedRoute: ActivatedRoute) { }

  public initializeTitleService() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const  data  = this.activatedRoute.root.firstChild?.snapshot.data;
      const mainTitle = '100 Angular Challenge';
      const lastTitle = this.title.getTitle();

      if (data?.title) {
        const title = `${mainTitle} - ${data.title}`;

        if (lastTitle !== title) {
          this.title.setTitle(title);
        }
      } else {
        if (lastTitle !== mainTitle) {
          this.title.setTitle(mainTitle);
        }
      }
    });
  }
}


/* 
  constructor(public title: Title, public router: Router, public activatedRoute: ActivatedRoute) { }


  public initializeTitleService() {


    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((data) => {
      const dataa = this.activatedRoute.root.firstChild?.snapshot.data;
      const mainTitle = '100 Angular Challenge';
      const lastTitle= this.title.getTitle();
      console.log(dataa)

      if (data?.title) {
        const title = `${mainTitle} - ${data.title}`;

        if (lastTitle !== title) {
          this.title.setTitle(title);
        }
      } else {
        if (lastTitle !== mainTitle) {
          this.title.setTitle(mainTitle);
        }
      }

    });

  }


} */
