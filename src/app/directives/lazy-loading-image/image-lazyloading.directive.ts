import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appImageLazyloading]'
})
export class ImageLazyloadingDirective implements   AfterViewInit {

 
  @HostBinding('attr.src') srcAttribute :string ;
  @Input() src:string ='' ;
 public observer!: IntersectionObserver;

  
 
 constructor(private element: ElementRef, @Inject('Window') public window: Window) {

  this.srcAttribute = '';
  }

 
 public ngAfterViewInit(): void {
    console.log(this.canLazyLoad());
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting }) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        });
      });

      this.observer.observe(this.element.nativeElement);
    } else {
    /*   this.loadImage(); */
    }
  }

   private loadImage(): void {
    if(this.src ){
      this.srcAttribute  = this.src; 
    }
    
   
    
  
  
  } 

  private canLazyLoad(): boolean {

    return 'IntersectionObserver' in window;


    /* 
    return this.window && this.window.hasOwnProperty('IntersectionObserver'); */
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
 