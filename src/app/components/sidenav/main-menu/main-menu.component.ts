import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  public faHome = faHome;
  public faSearch = faSearch;
}
