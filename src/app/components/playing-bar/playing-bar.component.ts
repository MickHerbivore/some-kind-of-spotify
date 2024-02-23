import { Component } from '@angular/core';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-playing-bar',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './playing-bar.component.html',
  styleUrl: './playing-bar.component.css'
})
export class PlayingBarComponent {

}
