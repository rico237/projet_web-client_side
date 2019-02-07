import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./body/details/details.component";
import { BodyComponent } from "./body/body.component";
import { RecetteComponent } from './recette/recette.component';
import { RecetteDetailComponent } from './recette/recette-detail/recette-detail.component';

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: BodyComponent},
    {path: "detail/:id", component: DetailsComponent},
    {path: "recettes", component: RecetteComponent},
    {path: "recettes/:id", component: RecetteDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
