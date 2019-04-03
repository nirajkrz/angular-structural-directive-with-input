import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlightThis]'
})
export class MakeGreenDirective {
  @Input() count: number;
  @Input() highlightColor: string;
  @Output() clicked: EventEmitter<number>;

  constructor(private elementRef: ElementRef, injector: Injector) {  }

  ngOnInit(): void {
    this.decorateMyTag();
  }

  private decorateMyTag(): void {
    console.log("highlightColor", this.highlightColor);
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }
}