import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthorizationFilter implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let functionKeys: number[] = [];

    if (!!route.data.functionKeys)
      functionKeys = route.data.functionKeys;

    return true;
  }
};
