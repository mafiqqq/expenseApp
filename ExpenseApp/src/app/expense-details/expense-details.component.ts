import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../shared/expense-detail.service';
import { ExpenseDetail } from '../shared/expense-detail.model'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {

  constructor(public service: ExpenseDetailService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

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
