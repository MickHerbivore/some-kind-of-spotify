import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MainMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
