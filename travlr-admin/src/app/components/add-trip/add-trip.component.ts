import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from "src/app/services/trip-data.service";


@Component({
  selector: "app-add-trip",
  templateUrl: "./add-trip.component.html",
  styleUrls: ["./add-trip.component.css"],
})
export class AddTripComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ["CLAR21" ],//+ parseInt((Math.random() * 400) + 1), Validators.required],
      name: ["Claires`s Reef", Validators.required],
      length: ["4 nights / 5 days", Validators.required],
      start: ["6-2-2022", Validators.required],
      resort: ["resort", Validators.required],
      perPerson: [1999.0, [Validators.required]],
      image: ["reef3.jpg", Validators.required],
      description: [
        "At Claires`s Reef...Sed et augue lorem. In sit amet placerat arcu.…",
        Validators.required,
      ],
      aliases: this.formBuilder.array([this.formBuilder.control("")]),
    });
  }

  get aliases() {
    return this.addForm.get("aliases") as FormArray;
  }
  // public addTrip(formData: Trip): Promise<Trip> {
  //   console.log("Inside TripDataService#addTrip");
  //   return this.http
  //     .post<Trip>(`${this.apiBaseUrl}trips`, formData)
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  onSubmit() {
    console.log("submitting", this.addForm.valid);
    this.submitted = true;
    if (true || this.addForm.valid) {
      this.tripService
        .addTrip(this.addForm.value)
        //FIXME .subscribe( data => {
        .then((data) => {
          console.log(data);
          this.router.navigate(["list-trips"]);
        });
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.addForm.controls;
  }
}

