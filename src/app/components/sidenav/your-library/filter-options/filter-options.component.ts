import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronCircleLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-options',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent implements AfterViewInit {

  @ViewChild ('optionsContainer') container!: ElementRef;

  public pos = { top: 0, left: 0, x: 0, y: 0 };
  public event!: MouseEvent;
  public isMouseDown = false;
  public showLeftArrow = false;
  public showRigthArrow = false;

  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;

  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.container.nativeElement.scrollTop = 0;
      this.container.nativeElement.scrollLeft = 0;
      this.showRigthArrow = this.container.nativeElement.scrollWidth - this.container.nativeElement.scrollLeft != this.container.nativeElement.clientWidth;
    }, 0);

  }

  onMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    
    this.pos = {
      // The current scroll
      left: this.container.nativeElement.scrollLeft,
      top: this.container.nativeElement.scrollTop,
      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    };
    
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseUp(): void {
    this.isMouseDown = false;
    document.removeEventListener('mouseup', this.onMouseUp);
  }
  
  onMouseMove( event: MouseEvent ): void {
    if (!this.isMouseDown) {
      return;
    }
    const dx = event.clientX - this.pos.x;
    const dy = event.clientY - this.pos.y;
  
    // Scroll the element
    this.container.nativeElement.scrollTop = this.pos.top - dy;
    this.container.nativeElement.scrollLeft = this.pos.left - dx;

    this.showLeftArrow = this.container.nativeElement.scrollLeft != 0;
    this.showRigthArrow = this.container.nativeElement.scrollWidth - this.container.nativeElement.scrollLeft != this.container.nativeElement.clientWidth;
  }

}
