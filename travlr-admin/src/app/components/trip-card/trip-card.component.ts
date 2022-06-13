import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';


@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
//FIXME ?
  @Input('trip') trip: Trip;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
////FIXME ?
  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router
  }

}
