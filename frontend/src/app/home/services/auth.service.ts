import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(false); //behaviorsubject (false) ferme tt les vues qui necessitent une auth
  public authToken = '';
  public userId = '';
  public userEmail = '';
  userAdminID = '62d841582a3205eb840aed67';

  constructor(private http: HttpClient, private router: Router) {}

  createUser(email: string, password: string, /*isAdmin: boolean = false*/) {
    return this.http.post<{ message: string }>(
      'http://localhost:3000/api/auth/signup',
      { email: email, password: password, /*isAdmin: isAdmin*/ }
    );
  }

  getToken() {
    return this.authToken;
  }

  getUserId() {
    return this.userId;
  }
  getUserEmail() {
    return this.userEmail;
  }
  loginUser(email: string, password: string) {
    return this.http
      .post<{ userId: string; token: string; userEmail: string }>(
        'http://localhost:3000/api/auth/login',
        { email: email, password: password }
      )
      .pipe(
        tap(({ userId, token, userEmail }) => {
          this.userId = userId;
          this.authToken = token;
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          localStorage.setItem('userEmail', userEmail);
          this.isAuth$.next(true); //la prochaine valeur du behaviorsubject isAuth$
          this.userEmail = userEmail;
          this.router.navigate(['/home']);
        })
      );
  }

  logout() {
    this.authToken = '';
    this.userId = '';
    this.isAuth$.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    this.router.navigate(['login']);
  }
}
