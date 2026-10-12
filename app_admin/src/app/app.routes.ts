import { Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { AddTrip } from './add-trip/add-trip';

export const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip/:tripCode', component: EditTrip },
];
