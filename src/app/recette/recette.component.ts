import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-recette',
	templateUrl: './recette.component.html',
	styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
	recettes : any;

	constructor(
		private http: HttpClient, 
		private router: Router,
		private recipeService: RecipeService
	) {}

	ngOnInit() {
		this.recipeService.getAllRecipes().subscribe((response) => this.recettes = response.recipes );
	}

	isLogged(): boolean{
		return localStorage.getItem('jwtToken') !== null ;
	}

	logout() {
		localStorage.removeItem('jwtToken');
		this.router.navigate(['home']);
	}

    public routeDetailProduct(detailRoute, productInfos) {
        this.router.navigate([detailRoute + productInfos]);
    }
}
