import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseDetailFormComponent } from './expense-details/expense-detail-form/expense-detail-form.component';
import { ExpenseDetailService } from './shared/expense-detail.service';
import { ExpenseDetail } from './shared/expense-detail.model';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
    ExpenseDetailService,
    ExpenseDetail,
    CdkColumnDef
  ],
})
export class AppComponent {
  
}
