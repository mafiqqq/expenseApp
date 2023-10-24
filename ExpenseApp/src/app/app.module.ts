import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseDetailFormComponent } from './expense-details/expense-detail-form/expense-detail-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


import { ToastrModule } from 'ngx-toastr'
import { ExpenseDetailService } from './shared/expense-detail.service';
import { ExpenseDetail } from './shared/expense-detail.model';
import { FooterComponent } from './footer/footer.component';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    AppComponent,
    ExpenseDetailsComponent,
    ExpenseDetailFormComponent,
    FooterComponent,
    MatDialogModule
  ],
  providers: [
    ExpenseDetailService,
    ExpenseDetail,
    CdkColumnDef
  ],
})
export class AppModule { }
