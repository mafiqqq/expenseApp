import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    ExpenseDetailFormComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ToastrService]
})
// export class ExpenseDetailsComponent implements OnInit {
export class ExpenseDetailsComponent {

  displayedColumn: string[] = ['expenseId', 'expenseName', 'expenseCategory', 'expenseDate', 'expenseAmount']
  dataSource!: MatTableDataSource<ExpenseDetail>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // dataSource!: MatTableDataSource<ExpenseDetail>
  expenses: any
  constructor(public service: ExpenseDetailService, private toastr: ToastrService) {
    this.service.getExpenseData().subscribe((data) => {
      console.log(data);
      this.expenses = data;
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    // this.service.dataSource
  }

  // ngOnInit() {
  //   // this.service.refreshList();
  //   this.service.refreshList();
  //   // this.service.dataSource.paginator = this.paginator;
  //   // this.service.dataSource.sort = this.sort;
  // }

  populateForm(selectedRecord:ExpenseDetail) {
    // To avoid reuse of same object assign to a new object
    this.service.formData = Object.assign({}, selectedRecord);
  }

  deleteExpense(id:number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteExpenseDetail(id)
      .subscribe({
        next: res => {
          this.service.list = res as ExpenseDetail[]
          this.toastr.error('Deleted expense successfully', 'Expense Detail Register')
        },
        error: err => {console.log(err)}
      })
    }
  }

}
