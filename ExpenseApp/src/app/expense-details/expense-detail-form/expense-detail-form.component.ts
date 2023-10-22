import { Component } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, NgForm } from "@angular/forms";
import { ExpenseDetail } from 'src/app/shared/expense-detail.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense-detail-form',
  templateUrl: './expense-detail-form.component.html',
  styleUrls: ['./expense-detail-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
  // imports: [MatFormFieldModule, MatInputModule, 
  //   MatIconModule, MatSelectModule]
})
export class ExpenseDetailFormComponent {

  // Inject the toastr service
  constructor(public service: ExpenseDetailService, private toastr: ToastrService) {

  }

  // const EXPENSE_CATEGORIES: ExpenseCategories[] = ['Food', 'Shopping', 'Entertainment', 'Utilities', 'Others']

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true
    if(form.valid) {
      if (this.service.formData.expenseId == 0) {
        this.insertRecord(form)
      } else {
        this.updateRecord(form)
      }
    }
  }

  insertRecord(form:NgForm) {
    this.service.postExpenseDetail()
    .subscribe({
      next: res => {
        this.service.list = res as ExpenseDetail[]
        this.service.resetForm(form)
        this.toastr.success('New expense added successfully!', 'Expense Detail Register')
      },
      error: err => {console.log(err)}
    })
  }

  updateRecord(form:NgForm) {
    this.service.updateExpenseDetail()
    .subscribe({
      next: res => {
        this.service.list = res as ExpenseDetail[]
        this.service.resetForm(form)
        this.toastr.info('Updated expense', 'Expense Detail Register')
      },
      error: err => {console.log(err)}
    })
  }



}
