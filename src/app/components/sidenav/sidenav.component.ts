import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { YourLibraryComponent } from './your-library/your-library.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MainMenuComponent, YourLibraryComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
