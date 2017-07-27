import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'navbar',
    //template: '<h2> Navbar </h2>'
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    brandName = "The Best!";

    constructor(private _route: Router){ }

    getBrandName(): string{
        return this.brandName;
    }

    isRouteActive(url: string): boolean{
            return this._route.isActive(url, true);
    }
}