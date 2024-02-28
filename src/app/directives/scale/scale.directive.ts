import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor(private element :ElementRef) { }

  @HostListener('mouseover')
  public mouseOver():void{
    this.element.nativeElement.style.transition='all .3s'
    this.element.nativeElement.style.transform='scale(1.25)'
  }
  @HostListener('mouseout')
  public mouseOut():void{
    this.element.nativeElement.style.transform='scale(1.0)'


  }



}
