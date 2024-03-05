import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media-bar/models/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/models/social-media.enum';
import { PillType } from '../pill/pill-type.enum';


@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
  
})
export class ComponentDocumentationComponent {

public PillType = PillType;


  public loaded = false;
  public socialMedia: SocialMediaIcon[] = [
    { href: 'https://www.facebook.com', type: SocialMedia.Facebook },
    { href: 'https://www.instagram.com', type: SocialMedia.Instagram },
    { href: 'https://www.linkedin.com', type: SocialMedia.LinkedIn },
    { href: 'https://twitter.com', type: SocialMedia.Twitter },
    { href: 'https://www.YouTube.com', type: SocialMedia.YouTube },
  ];

  parentDate: Date = new Date('2024-03-10 2:10:50');


  public accordionItem: AccordionItem[] = [
    {
      title: 'example1',
      content: 'exampled contetdddd1',
      isExpanded: false
    },


    {
      title: 'example2',
      content: 'exampled conte2222222',
      isExpanded: false
    },



  ];


  public progressValue = 25;
  public toggleValue = true;


  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;


  public buttonToggleOptions: ButtonMeta[] = [

    new ButtonMeta({ id: 1, title: 'bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'underline' })
  ];

  @ViewChild('snackBar')
  snackBar!: SnackbarComponent;
  
  
  public snackbarShow(): void {
    this.snackBar.showMessage('exampleeee')
  }
}
