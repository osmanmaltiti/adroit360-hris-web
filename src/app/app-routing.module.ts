import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeAuthComponent } from './auth/employee/employee.component';
import { ManagerAuthComponent } from './auth/manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: EmployeeAuthComponent },
      { path: 'manager', component: ManagerAuthComponent },
    ],
  },
  {
    path: '',
    component: EmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
