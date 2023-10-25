import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ExpenseDetailService } from '../shared/expense-detail.service';
import { ExpenseDetail } from '../shared/expense-detail.model'
import { ToastrService } from 'ngx-toastr';
import { ExpenseDetailFormComponent } from './expense-detail-form/expense-detail-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    ExpenseDetailFormComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ToastrService]
})

export class ExpenseDetailsComponent {

  displayedColumn: string[] = ['expenseId', 'expenseName', 'expenseCategory', 'expenseDate', 'expenseAmount', 'expenseAction']
  dataSource!: MatTableDataSource<ExpenseDetail>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  newlist: any;
  expenses: any
  constructor(public service: ExpenseDetailService, 
    private toastr: ToastrService, public dialog: MatDialog) {
    this.service.getExpenseData().subscribe((data) => {
      console.log(data);
      this.expenses = data;
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.service.dataSource
    console.log(this.service.dataSource);
    this.dataSource = this.service.dataSource;
  }

  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value
    this.dataSource.filter=value;
  }

  populateForm(selectedRecord:ExpenseDetail) {
    // To avoid reuse of same object assign to a new object
    console.log(selectedRecord);
    selectedRecord.expenseDate = selectedRecord.expenseDate.substring(0,10);
    this.service.formData = Object.assign({}, selectedRecord);
  }

  deleteExpense(id:number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteExpenseDetail(id)
      .subscribe({
        next: res => {
          this.service.list = res as ExpenseDetail[]
          this.toastr.error('Deleted expense successfully', 'Expense Detail Register')
          this.dataSource = new MatTableDataSource(this.service.list)
        },
        error: err => {console.log(err)}
      })
    }
  }

}
