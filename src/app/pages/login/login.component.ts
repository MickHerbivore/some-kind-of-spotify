import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public authUrl: string = '';
  private loginService: AuthService = inject(AuthService);
  

  ngOnInit(): void {
    localStorage.clear();
    this.authUrl = this.loginService.getAuthUrl();
  }

}
