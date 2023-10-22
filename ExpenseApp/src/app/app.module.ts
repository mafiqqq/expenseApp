import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseDetailFormComponent } from './expense-details/expense-detail-form/expense-detail-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    ExpenseDetailsComponent,
    ExpenseDetailFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
