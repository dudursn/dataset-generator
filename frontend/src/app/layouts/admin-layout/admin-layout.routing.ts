import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HomeComponent } from 'app/home/home.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'dashboard',      component: DashboardComponent },
];
