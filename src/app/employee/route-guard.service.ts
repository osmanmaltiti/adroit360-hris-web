import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined') {
        const token = String(localStorage.getItem('token'));
        const role = String(localStorage.getItem('role'));

        if (token && role === 'employee') {
          resolve(true);
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
