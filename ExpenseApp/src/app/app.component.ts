import { Component } from '@angular/core';
import { ExpenseDetailService } from './shared/expense-detail.service';
import { ExpenseDetail } from './shared/expense-detail.model';
import { HttpClientModule } from '@angular/common/http';
import { CdkColumnDef } from '@angular/cdk/table';
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
