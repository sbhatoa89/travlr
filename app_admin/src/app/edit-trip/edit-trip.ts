import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TripData } from "../services/trip-data";
import { Trip } from "../models/trip";

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: "app-edit-trip",
  styleUrl: "./edit-trip.css",
  templateUrl: "./edit-trip.html"
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ["", Validators.required],
      name: ["", Validators.required],
      length: ["", Validators.required],
      start: ["", Validators.required],
      resort: ["", Validators.required],
      perPerson: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required]
    });

    const tripCode = this.route.snapshot.paramMap.get("tripCode");

    if (tripCode) {
      this.tripService.getTrip(tripCode).subscribe({
        next: (trip: Trip) => {
          this.editForm.patchValue({
            ...trip,
            start: trip.start ? new Date(trip.start).toISOString().substring(0, 10) : ""
          });
        },
        error: (error: any) => console.log("Error:", error)
      });
    }
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value).subscribe({
        next: () => this.router.navigate([""]),
        error: (error: any) => console.log("Error:", error)
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}
