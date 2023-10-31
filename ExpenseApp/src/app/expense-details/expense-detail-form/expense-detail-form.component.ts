import { Component, Injectable, Input } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { FormsModule, NgForm } from "@angular/forms";
import { ExpenseDetail } from 'src/app/shared/expense-detail.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, formatDate } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseDetailsComponent } from '../expense-details.component';


@Component({
  selector: 'app-expense-detail-form',
  templateUrl: './expense-detail-form.component.html',
  styleUrls: ['./expense-detail-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ]
})
@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailFormComponent {

  categoryOptions: string[] = [
    'Food',
    'Entertainment',
    'Utilities',
    'Others'];
  titleForm: string = "Enter New Expense";
  maxDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  // Inject the toastr service
  constructor(public service: ExpenseDetailService,
    private toastr: ToastrService, public mod: ExpenseDetailsComponent) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.expenseId == 0) {
        this.insertRecord(form)
      } else {
        this.updateRecord(form)
      }
    }
  }

  insertRecord(form: NgForm) {
    this.service.postExpenseDetail()
      .subscribe({
        next: res => {
          this.service.list = res as ExpenseDetail[]
          this.mod.dataSource = new MatTableDataSource(this.service.list)
          this.mod.dataSource.sort = this.mod.sort;
          this.mod.dataSource.paginator = this.mod.paginator;
          this.service.resetForm(form)
          this.toastr.success('New expense added successfully!', 'Expense Detail Register')
        },
        error: err => { console.log(err) }
      });
  }

  updateRecord(form: NgForm) {
    this.service.updateExpenseDetail()
      .subscribe({
        next: res => {
          this.service.list = res as ExpenseDetail[]
          this.mod.dataSource = new MatTableDataSource(this.service.list)
          this.mod.dataSource.sort = this.mod.sort;
          this.mod.dataSource.paginator = this.mod.paginator;
          this.service.resetForm(form)
          this.toastr.info('Updated expense', 'Expense Detail Register')
        },
        error: err => { console.log(err) }
      });
  }

}
