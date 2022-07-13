import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
    if (localStorage.getItem('token')) {
      this.auth.isAuth$.next(true);
    }
  }
// canActivate pour vérifier l'authentification avant d'accéder à Home
  canActivate(): Observable<boolean> { // Observable qui retourne true si l'utilisateur est authentifié
    return this.auth.isAuth$.pipe(
      take(1), // ne considérer que la premiere authentification
      tap((auth) => {
        if (!auth) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
