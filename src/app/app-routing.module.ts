import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IsAccessAllowedGuard } from "../guard/is-access-allowed.guard";

import { DetailsComponent } from "./body/details/details.component";
import { BodyComponent } from "./body/body.component";
import { HomeComponent } from "./home/home.component";
import { RecetteComponent } from './recette/recette.component';
import { RecetteDetailComponent } from './recette/recette-detail/recette-detail.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AddRecipeComponent } from "./add-recipe/add-recipe.component";



const routes: Routes = [

    // General
    // {path: "", redirectTo: "/", pathMatch: "full"},
    {path: "home", component: BodyComponent},
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},

    // recettes
    {path: "recettes", component: RecetteComponent},
    {path: "recettes/creer", component: AddRecipeComponent},
    {path: "recettes/:id", component: RecetteDetailComponent},

    // Produits
    {
        path: "detail/:id",
        component: DetailsComponent,
        canActivate: [IsAccessAllowedGuard],
        data: {
            comeFromPath: "/home",
            parent: "/"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
