import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRippleButton]'
})
export class RippleButtonDirective {



  @Input() public appRipple = 'ripple';

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.element.nativeElement, this.appRipple);
  }
}
