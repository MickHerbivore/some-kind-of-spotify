import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-playback-bar',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './playback-bar.component.html',
  styleUrl: './playback-bar.component.css'
})
export class PlaybackBarComponent {

}
