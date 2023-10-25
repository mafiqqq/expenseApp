import { Component, Injectable } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, NgForm } from "@angular/forms";
import { ExpenseDetail } from 'src/app/shared/expense-detail.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ExpenseDetailsComponent } from '../expense-details.component';


@Component({
  selector: 'app-expense-detail-form',
  templateUrl: './expense-detail-form.component.html',
  styleUrls: ['./expense-detail-form.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ExpenseDetailsComponent,
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
  titleForm!: "Enter New Expense";
  maxDate!: string;
  // Inject the toastr service
  constructor(public service: ExpenseDetailService, 
    private toastr: ToastrService, public mod: ExpenseDetailsComponent) {
  }

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true
    console.log(form)
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
        this.mod.dataSource = new MatTableDataSource(this.service.list)
        this.service.resetForm(form)
        this.toastr.success('New expense added successfully!', 'Expense Detail Register')
      },
      error: err => {console.log(err)}
    });
    
  }

  updateRecord(form:NgForm) {
    this.service.updateExpenseDetail()
    .subscribe({
      next: res => {
        this.service.list = res as ExpenseDetail[]
        this.mod.dataSource = new MatTableDataSource(this.service.list)
        this.service.resetForm(form)
        this.toastr.info('Updated expense', 'Expense Detail Register')
      },
      error: err => {console.log(err)}
    });
  }

}
