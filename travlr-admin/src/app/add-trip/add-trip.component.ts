import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from 'services/trip-data.service';
// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { HttpClientModule } from "@angular/common/http";
// import { Trip } from 'models/trip';

//import { Observable } from 'rxjs/Observable';

// import { HttpParams } from "@angular/common/http";
// const params = new HttpParams({
//   fromString: 'orderBy="$key"&limitToFirst=1',
// });


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css'] })
export class AddTripComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService ){}

ngOnInit() {
  this.addForm = this.formBuilder.group({
  _id: [],
  code: ['', Validators.required],
  name: ['', Validators.required],
  length: ['', Validators.required],
  start: ['', Validators.required],
  resort: ['', Validators.required],
  perPerson: ['', Validators.required],
  image: ['', Validators.required],
  description: ['', Validators.required],
  })
}
// public addTrip(formData: Trip): Promise<Trip> {
//   console.log("Inside TripDataService#addTrip");
//   return this.http
//     .post<Trip>(`${this.apiBaseUrl}trips`, formData)
//     .toPromise()
//     .catch(this.handleError);
// }

onSubmit() {
  this.submitted = true;
  if(this.addForm.valid){
    this.tripService.addTrip(this.addForm.value)
    //FIXME .subscribe( data => {
    .then( data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}

// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}
