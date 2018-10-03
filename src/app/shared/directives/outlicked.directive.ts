import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[appOutclicked]'
})
export class OutlickedDirective {
  @Output()
  outclicked = new EventEmitter<Boolean>();

  constructor(private _element: ElementRef) {}

  @HostListener('document:click', ['$event'])
  checkOutclick(event: MouseEvent): void {
    if (!this._element.nativeElement.contains(event.target)) {
      this.outclicked.emit(true);
    } else {
      this.outclicked.emit(false);
    }
  }
}
