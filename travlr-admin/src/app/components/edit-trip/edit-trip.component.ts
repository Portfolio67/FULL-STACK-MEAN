import { TripDataService } from 'src/app/services/trip-data.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Trip } from "src/app/models/trip";


@Component({
  selector: "app-edit-trip",
  templateUrl: "./edit-trip.component.html",
  styleUrls: ["./edit-trip.component.css"],
})
export class EditTripComponent implements OnInit {
  @Input("trip") trip: Trip;
  // FIXME i tried adding a constructor *me
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tripService: TripDataService
  ) {}

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate([""]);
      return;
    }
    console.log("EditTripComponent#onInit found tripCode " + tripCode);
    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ["", Validators.required],
      length: ["", Validators.required],
      start: ["", Validators.required],
      resort: ["", Validators.required],
      perPerson: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required],
    });
    console.log(
      "EditTripComponent#onInit calling TripDataService#getTrip('" +
        tripCode +
        "')"
    );

    this.tripService.getTrip(tripCode).then((data) => {
      console.log(data);
      // Don't use editForm.setValue() as it will throw console error
      this.editForm.patchValue(data[0]);
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      //this.tripDataService.updateTrip(this.editForm.value)
      // FIXME *me
      this.tripService.editTrip(this.editForm.value).then((data) => {
        console.log(data);
        this.router.navigate(["list-trips"]);
      });
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public editFormControls() {
    return this.editForm.controls;
  }

  public async deleteTrip(tripForm: FormControl,$event) {
    $event.preventDefault()

    await this.tripService.deleteTrip(tripForm.get('code').value);
    this.router.navigate(["list-trips"]);
  }

  get f() {
    return this.editForm.controls;
  }
}
