import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from '../../../services/recipe.service';

@Component({
	selector: 'app-recette-comments',
	templateUrl: './recette-comments.component.html',
	styleUrls: ['./recette-comments.component.css']
})
export class RecetteCommentsComponent implements OnInit {
	comments : any;
    productId: string;
    commentInput: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private recipeService: RecipeService
    ) {}

    public ngOnInit() {
        this.productId = this.activatedRoute.snapshot.params["id"];
		this.recipeService.getCommentairesForRecipe(this.productId).subscribe((response) => this.comments = response.comments );
	}

    createComment(){
        const comm = {
            content : this.commentInput, 
            recette_id : this.productId
        };
        this.recipeService.createComment(comm).subscribe((rep) => {
            // console.log(rep)
            location.reload();
        });
    }

}
