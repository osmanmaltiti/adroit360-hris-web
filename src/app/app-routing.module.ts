import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeAuthComponent } from './auth/employee/employee.component';
import { ManagerAuthComponent } from './auth/manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './employee/feedback/feedback.component';
import { RouteGuardService } from './employee/route-guard.service';
import { CreateEmployeeComponent } from './manager/create-employee/create-employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ReviewComponent } from './manager/review/review.component';
import { ManagerRouteGuardService } from './manager/route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: EmployeeAuthComponent },
      { path: 'auth_manager', component: ManagerAuthComponent },
    ],
  },
  {
    path: 'employee',
    canActivate: [RouteGuardService],
    component: EmployeeComponent,
  },
  {
    path: 'employee/feedback',
    canActivate: [RouteGuardService],
    component: FeedbackComponent,
  },
  {
    path: 'manager',
    canActivate: [ManagerRouteGuardService],
    component: ManagerComponent,
  },
  {
    path: 'manager/review',
    canActivate: [ManagerRouteGuardService],
    component: ReviewComponent,
  },
  {
    path: 'manager/create-user',
    canActivate: [ManagerRouteGuardService],
    component: CreateEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
