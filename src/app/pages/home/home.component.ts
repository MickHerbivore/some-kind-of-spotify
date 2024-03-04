import { Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { MainComponent } from '../../components/main/main.component';
import { PlayingBarComponent } from '../../components/playing-bar/playing-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, MainComponent, PlayingBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
