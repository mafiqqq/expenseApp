import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ExpenseDetail } from './expense-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailService {

  url: string = environment.apiBaseUrl + '/ExpenseDetail'
  list: ExpenseDetail[] = [];
  formData: ExpenseDetail = new ExpenseDetail();
  formSubmitted:boolean = false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as ExpenseDetail[]
        },
        error: err => {
          console.log(err)
        }
      })
  }

  postExpenseDetail() {
    return this.http.post(this.url, this.formData)
  }

  updateExpenseDetail() {
    return this.http.put(this.url + '/' + this.formData.expenseId, this.formData)
  }

  deleteExpenseDetail(id:number) {
    return this.http.delete(this.url + '/' + id)
  }

  resetForm(form:NgForm) {
    // Call reset method from this NgForm reset method
    form.form.reset();
    this.formData = new ExpenseDetail();
    this.formSubmitted = false
  }

}
