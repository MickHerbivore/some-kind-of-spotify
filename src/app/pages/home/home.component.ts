import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainComponent } from '../../components/main/main.component';
import { PlayingBarComponent } from '../../components/playing-bar/playing-bar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { Token } from '../../interfaces/token.interface';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, MainComponent, PlayingBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  public subs: Subscription[] = [];
  private route: ActivatedRoute = inject(ActivatedRoute);
  private loginService: AuthService = inject(AuthService);
  private userService: UserService = inject(UserService);
  private router: Router = inject(Router);
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (localStorage.getItem('access_token')) {
        this.getAllData();
      } else if (!code) {
        this.router.navigate(['login']);
      } else if (code) {
        this.getToken( code );
      }

    });
  }

  getToken( code: string ): void {
    this.subs.push(
      this.loginService.getToken( code ).subscribe({
        next: (token: Token) => {
          localStorage.setItem('access_token', token.access_token);
          localStorage.setItem('refresh_token', token.refresh_token);
          this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
          this.getAllData();
        },
        error: (error) => {
          console.error('Error getting token', error);
        }
      })
    );
  }

  getAllData() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.subs.push(
      this.userService.getUserProfile().subscribe({
        next: (user) => {
          console.log('user', user);
        },
        error: (error) => {
          console.error('Error getting user profile', error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
