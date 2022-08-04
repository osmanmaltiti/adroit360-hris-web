import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EmployeeAuthComponent } from './auth/employee/employee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ManagerAuthComponent } from './auth/manager/manager.component';
import { CreateDevelopmentComponent } from './employee/create-development/create-development.component';
import { CreatePerformanceComponent } from './employee/create-performance/create-performance.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskbarComponent } from './employee/taskbar/taskbar.component';
import { HistoryCardComponent } from './manager/history-card/history-card.component';
import { ManagerComponent } from './manager/manager.component';
import { ReviewCardComponent } from './manager/review-card/review-card.component';
import { store } from './store/store';
import { PopupComponent } from './employee/taskbar/popup/popup.component';
import { ReviewComponent } from './manager/review/review.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManagerComponent,
    EmployeeComponent,
    EmployeeAuthComponent,
    ManagerAuthComponent,
    TaskbarComponent,
    CreateDevelopmentComponent,
    CreatePerformanceComponent,
    ReviewCardComponent,
    HistoryCardComponent,
    PopupComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ ...store }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
