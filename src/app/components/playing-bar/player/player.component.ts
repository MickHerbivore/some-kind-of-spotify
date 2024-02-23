import { Component } from '@angular/core';
import { ControlsComponent } from './controls/controls.component';
import { PlaybackBarComponent } from './playback-bar/playback-bar.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [ControlsComponent, PlaybackBarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

}
