import { Directive, AfterViewInit } from '@angular/core';
import { ElementRef, EventEmitter, Output } from '@angular/core';


@Directive({
  selector: '[lifeIsVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter();

  private intersectionObserver?: IntersectionObserver;

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this.intersectionObserver.observe(this.element.nativeElement);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.isVisible.emit();
        console.log('isVisible');
        this.intersectionObserver.unobserve(this.element.nativeElement);
        this.intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}
