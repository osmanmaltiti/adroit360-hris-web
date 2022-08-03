import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeAuthComponent } from './auth/employee/employee.component';
import { ManagerAuthComponent } from './auth/manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { TaskbarComponent } from './employee/taskbar/taskbar.component';
import { CreateDevelopmentComponent } from './employee/create-development/create-development.component';
import { CreatePerformanceComponent } from './employee/create-performance/create-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManagerComponent,
    EmployeeComponent,
    ManagerAuthComponent,
    EmployeeAuthComponent,
    TaskbarComponent,
    CreateDevelopmentComponent,
    CreatePerformanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
