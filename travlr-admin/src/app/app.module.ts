import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-router.module";
import { TripCardComponent } from "./components/trip-card/trip-card.component";
import { TripDataService } from "src/app/services/trip-data.service";
import { AddTripComponent } from "./components/add-trip/add-trip.component";
import { EditTripComponent } from "./components/edit-trip/edit-trip.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { TripListingComponent } from "./components/trip-listing/trip-listing.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [TripDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
