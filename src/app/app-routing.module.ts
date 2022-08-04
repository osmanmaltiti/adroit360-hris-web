import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeAuthComponent } from './auth/employee/employee.component';
import { ManagerAuthComponent } from './auth/manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';

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
    component: EmployeeComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
