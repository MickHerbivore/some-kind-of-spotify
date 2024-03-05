import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient = inject(HttpClient);


  getUserProfile() {
    return this.http.get(`${environment.SPOTIFY_URL}${environment.USER_PROFILE_URI}`);
  }

}
