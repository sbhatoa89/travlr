import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;

  constructor(private router: Router) {}

  public editTrip(): void {
    this.router.navigate(["edit-trip", this.trip.code]);
  }

  ngOnInit(): void {
  }
}
