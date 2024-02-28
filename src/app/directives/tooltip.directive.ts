import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Input, createComponent } from '@angular/core';
import { TooltipComponent } from '../shared/components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input() tooltip = '';
  @Input() tooltipPlace: 'top' | 'bottom' = 'top';

  private componentRef: ComponentRef<TooltipComponent>;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef
  ) {
    this.componentRef = createComponent(TooltipComponent, { environmentInjector: this.appRef.injector });
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.componentRef.instance.tooltipText) {
      this.componentRef.setInput('tooltipText', this.tooltip);
      this.componentRef.setInput('place', this.tooltipPlace);
      this.appRef.attachView(this.componentRef.hostView);
      
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.elementRef.nativeElement.classList.add('relative');
      this.elementRef.nativeElement.appendChild(domElem);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.setInput('tooltipText', null);
      this.componentRef.setInput('place', null);
      this.componentRef.destroy();
    }
  }
}
