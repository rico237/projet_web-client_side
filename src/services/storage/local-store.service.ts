/**
 * Vendor imports
 */
import { Injectable } from "@angular/core";

/**
 * Service de stockage d'une route
 */
@Injectable()
export class LocalStoreService {

    /**
     * Route courante durant un process
     * @type {string}
     */
    private route: string = null;

    /**
     * Set la route courante
     * @param {string} route
     */
    public setRoute(route: string): void {
        this.route = route;
    }

    /**
     * Récupère la route courante
     * @returns {string}
     */
    public getRoute(): string {
        return this.route;
    }
}
