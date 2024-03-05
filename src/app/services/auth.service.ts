import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Token } from '../interfaces/token.interface';
import { generateRandomString } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);
  

  getAuthUrl(): string {
    return (`${environment.SPOTIFY_AUTH_URL}${environment.AUTHORIZE_URI}?client_id=${environment.CLIEND_ID}&response_type=code&redirect_uri=${environment.REDIRECT_URL}&scope=user-read-private%20user-read-email%20streaming%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`);
  }

  getToken( code: string ): Observable<Token> {
    const state = generateRandomString(16);
    let params = new HttpParams()
      .set('code', code)
      .set('state', state)
      .set('grant_type', 'authorization_code');

    return this.http.get<Token>(`${environment.SKOS_API_URL}${environment.TOKEN_URI}`, { params });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['login']);
  }

}
