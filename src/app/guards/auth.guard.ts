import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

// AuthGuard će osigurati da samo autentifikovani korisnici mogu pristupiti zaštićenim rutama.
@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private cookieService: CookieService, private router: Router) {}
  
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
      const token = this.cookieService.get('accessToken');
      if (token) {
        return true;
      } 
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }