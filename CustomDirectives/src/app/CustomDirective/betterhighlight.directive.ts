import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') background: string = 'transparent';

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
  }
}
