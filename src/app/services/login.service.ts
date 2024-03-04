import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private http: HttpClient) {}

  getAuthUrl(): string {
    return (`${environment.SPOTIFY_AUTH_URL}${environment.AUTHORIZE_URI}?client_id=${environment.CLIEND_ID}&response_type=code&redirect_uri=${environment.REDIRECT_URL}&scope=user-read-private%20user-read-email%20streaming%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`);
  }
}
