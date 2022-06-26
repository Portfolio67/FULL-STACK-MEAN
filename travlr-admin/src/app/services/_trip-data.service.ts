import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Trip } from "../models/trip";
//import { Observable } from 'rxjs/Observable';

import { HttpParams } from "@angular/common/http";
const params = new HttpParams({
  fromString: 'orderBy="$key"&limitToFirst=1',
});

@Injectable()
export class TripDataService {
  //initialize with httpclient for fetching
  constructor(private http: HttpClient) {}

  private apiBaseUrl = "http://localhost:3000/api/";

  private tripUrl = `${this.apiBaseUrl}trips`; // was in get trips

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripsDataSevice#getTrips");
    return this.http
      .get<Trip[]>(this.tripUrl, { responseType: "json" })
      .toPromise()
      .catch(this.handleError);
    // .then(response => responseType: "json")
  }

  //FIXME
  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log("Inside TripsDataSevice#getTrip");
    return this.http
      .get<Trip[]>(this.tripUrl, { responseType: "json" })
      .toPromise()
      .catch(this.handleError);
    // .then(response => responseType: "json")
  }
  //FIXME ?
  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");
    return this.http
      .post<Trip>(this.tripUrl, formData)
      .toPromise()
      .catch(this.handleError);
  }

  public editTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#updateTrip");
    return this.http
      .post<Trip>(this.tripUrl, formData)
      .toPromise()
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string): Promise<any> {
    console.log("Inside TripsDataSevice#getTrip");
    return this.http
      .delete<any>(this.tripUrl + "/" + tripCode, { responseType: "json" })
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("something has gone wrong", error);
    return Promise.reject(error.message || error);
  }
}
