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
import { IngredientComponent } from "./body/ingredient/ingredient.component";
import { DetailsComponent } from "./body/details/details.component";
import { FoodStoreService } from "../services/storage/food.store.service";
import { FoodDetailStoreService } from "../services/storage/food-detail.store.service";
import { IsAccessAllowedGuard } from "../guard/is-access-allowed.guard";
import { LocalStoreService } from "../services/storage/local-store.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchbarComponent,
        OptionsComponent,
        HeaderComponent,
        BodyComponent,
        RecipePreviewComponent,
        IngredientComponent,
        DetailsComponent,
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
    ],
    providers: [
        FoodService,
        OptionsService,
        FoodStoreService,
        FoodDetailStoreService,
        IsAccessAllowedGuard,
        LocalStoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
