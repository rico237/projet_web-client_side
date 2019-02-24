import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./body/details/details.component";
import { BodyComponent } from "./body/body.component";
import { RecetteComponent } from './recette/recette.component';
import { RecetteDetailComponent } from './recette/recette-detail/recette-detail.component';
import { IsAccessAllowedGuard } from "../guard/is-access-allowed.guard";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";


const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: BodyComponent},
    {path: "recettes", component: RecetteComponent},
    {path: "recettes/creer", component: AddRecipeComponent},
    {path: "recettes/:id", component: RecetteDetailComponent},
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
