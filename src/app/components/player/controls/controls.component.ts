import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackwardStep, faForwardStep, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  public faPlay = faPlay;
  public faBackwardStep = faBackwardStep;
  public faForwardStep = faForwardStep;

}
