import { Component } from '@angular/core';
import { ExpenseDetailsComponent } from '../expense-details/expense-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  standalone: true,
  imports: [
    ExpenseDetailsComponent,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CareersComponent {

}
