import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fullpage]'
})
export class FullpageDirective {
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  @HostListener('load', ['$event'])
  onLoad(event) {
    this.resize();
  }

  resize() {
  }
}
