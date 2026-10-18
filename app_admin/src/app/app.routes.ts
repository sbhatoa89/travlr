import { Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { AddTrip } from './add-trip/add-trip';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'login', component: Login },
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip/:tripCode', component: EditTrip },
];

