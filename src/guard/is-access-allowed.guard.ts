/**
 * Vendor imports
 */
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LocalStoreService } from '../services/storage/local-store.service';

/**
 * Feature imports
 */

@Injectable()
export class IsAccessAllowedGuard implements CanActivate {

    /**
     * IsAccessAllowedGuard constructor
     * @param {LocalStoreService} localStoreService
     * @param router
     */
    constructor(private localStoreService: LocalStoreService, private router: Router) {
    }

    /**
     * Protège une route
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isAccessAllowed: boolean = false;

        if (route.data.comeFromPath !== undefined && route.data.parent !== undefined) {
            if (this.localStoreService.getRoute() === route.data.comeFromPath) {
                isAccessAllowed = true;
            } else {
                this.router.navigate([route.data.parent + "/" + route.data.comeFromPath]);
            }
        }

        return isAccessAllowed;
    }
}
