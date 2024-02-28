import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faCompactDisc, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TooltipComponent } from '../../../shared/components/tooltip/tooltip.component';
import { TooltipDirective } from '../../../directives/tooltip.directive';

@Component({
  selector: 'app-your-library',
  standalone: true,
  imports: [FontAwesomeModule, TooltipComponent, TooltipDirective],
  templateUrl: './your-library.component.html',
  styleUrl: './your-library.component.css'
})
export class YourLibraryComponent {

  public faCompactDisc = faCompactDisc;
  public faPlus = faPlus;
  public faArrowRight = faArrowRight;

}
