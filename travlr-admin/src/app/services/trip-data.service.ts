import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { AuthResponse } from "../models/authresponse";
import { User } from "../models/user";
import { Trip } from "../models/trip";
import { BROWSER_STORAGE } from "../storage";

@Injectable()
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseUrl}/trips`;

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrorng", error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("login", user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("register", user);
  }

  public makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http.post(url, user).toPromise().catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log("Inside TripsDataSevice#getTrip");
    return this.http
      .get<Trip[]>(this.tripUrl, { responseType: "json" })
      .toPromise()
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripsDataSevice#getTrips");
    return this.http
      .get<Trip[]>(this.tripUrl, { responseType: "json" })
      .toPromise()
      .catch(this.handleError);
  }

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
}
