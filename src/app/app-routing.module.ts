import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./body/details/details.component";
import { AppComponent } from "./app.component";
import { CreateReceipeComponent } from "./create-receipe/create-receipe.component";
import { BodyComponent } from "./body/body.component";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: BodyComponent},
    {path: "detail/:id", component: DetailsComponent},
    {path: "create/receipe", component: CreateReceipeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
