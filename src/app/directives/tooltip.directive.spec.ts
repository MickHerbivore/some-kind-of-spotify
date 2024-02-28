import { TooltipDirective } from './tooltip.directive';
import { ApplicationRef, ElementRef } from '@angular/core'; // Import ElementRef
describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(new ElementRef(null), new ApplicationRef );
    expect(directive).toBeTruthy();
  });
});
