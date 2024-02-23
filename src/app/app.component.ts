import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './components/playing-bar/player/player.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './components/main/main.component';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    PlayingBarComponent,
    SidenavComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'some-kind-of-spotify';
}
