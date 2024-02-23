import { Component } from '@angular/core';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [ControlsComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

}
