import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentComponent } from './student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentformComponent } from './studentform/studentform.component';
// import {MatTableModule} from '@angular/material/table';
// import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    StudentregistrationComponent,
    StudentdetailsComponent,
    StudentComponent,
    StudentformComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
