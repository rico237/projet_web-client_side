import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {

    /**
     * Indique si le menu est fermé
     * @type {boolean}
     */
    public isCollapsed: boolean = false;

    /**
     * Déclanché lors du redimentionnement de la fenêtre
     * @param event
     */
    @HostListener("window:resize", ["$event"])
    public onResize(event): void {
        this.isCollapsed = event.target.innerWidth <= 767;
    }

}
