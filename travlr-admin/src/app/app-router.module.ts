import { NgModule } from "@angular/core";
//import { Routes, RouterModule, ROUTES } from "@angular/router";
import { RouterModule, Routes } from "@angular/router";
import { AddTripComponent } from "./components/add-trip/add-trip.component";
import { EditTripComponent } from "./components/edit-trip/edit-trip.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { TripListingComponent } from "./components/trip-listing/trip-listing.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "add-trip", component: AddTripComponent },
  { path: "edit-trip", component: EditTripComponent },
  { path: "login", component: LoginComponent },
  { path: "list-trips", component: TripListingComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
