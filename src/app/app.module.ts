import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from "@angular/material";
import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OptionsComponent } from "./searchbar/options/options.component";
import { FoodService } from "../services/food.service";
import { HttpClientModule } from "@angular/common/http";
import { BodyComponent } from "./body/body.component";
import { RecipePreviewComponent } from "./body/recipePreview/recipePreview.component";
import { OptionsService } from "../services/options.service";
import { tableauNutrition } from "./body/tableauNutrition/tableauNutrition.component";
import { DetailsComponent } from "./body/details/details.component";
import { FoodStoreService } from "../services/storage/food.store.service";
import { FoodDetailStoreService } from "../services/storage/food-detail.store.service";
import { RecetteComponent } from "./recette/recette.component";
import { RecetteCommentsComponent } from "./recette/recette-comments/recette-comments.component";
import { RecetteDetailComponent } from "./recette/recette-detail/recette-detail.component";
import { IsAccessAllowedGuard } from "../guard/is-access-allowed.guard";
import { LocalStoreService } from "../services/storage/local-store.service";
import { MapsComponent } from "./body/details/maps/maps.component";
import { AgmCoreModule } from "@agm/core";
import { PrixComponent } from "./body/details/prix/prix.component";
import { AddInfoComponent } from "./body/details/add-info/add-info.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SpaceAfterCommaPipe } from "../pipe/space-after-comma.pipe";
import { DeletePrefixPipe } from "../pipe/delete-prefix.pipe";
import { BoldPipe } from "../pipe/bold.pipe";
import { UniqPipe } from "../pipe/uniq.pipe";
import { ToNumberPipe } from "../pipe/to-number.pipe";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeService } from "../services/recipe.service";


@NgModule({
    declarations: [
        AppComponent,
        SearchbarComponent,
        OptionsComponent,
        HeaderComponent,
        BodyComponent,
        RecipePreviewComponent,
        tableauNutrition,
        DetailsComponent,
        RecetteComponent,
        RecetteCommentsComponent,
        RecetteDetailComponent,
        MapsComponent,
        PrixComponent,
        AddInfoComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,

        // Pipes
        SpaceAfterCommaPipe,
        DeletePrefixPipe,
        BoldPipe,
        UniqPipe,
        ToNumberPipe,
        AddRecipeComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ScrollingModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCv8Bpz2wUBHrl8ed75wyggnTVrregKx14"
          }),
        TagInputModule
    ],
    providers: [
        FoodService,
        OptionsService,
        FoodStoreService,
        FoodDetailStoreService,
        IsAccessAllowedGuard,
        LocalStoreService,
        RecipeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
