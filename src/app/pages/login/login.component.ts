import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public authUrl: string = '';

  constructor( private loginService: LoginService ) { }

  ngOnInit(): void {
    this.authUrl = this.loginService.getAuthUrl();
  }

}
