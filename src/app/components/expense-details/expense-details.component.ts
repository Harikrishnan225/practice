import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


interface ExpenseFormValue {
  type: "income" | "expense";
  amount: number | null;
  reason: string | null;
}


@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.scss'
})

export class ExpenseDetailsComponent implements OnInit {
  incomeAmount: number = 0;
  expenseAmount: number = 0;
  totalSavings: number = 0;
  incomeExpenseList: ExpenseFormValue[] = [];
  #fb = inject(FormBuilder);
  totalTransactions: boolean = false;

  ngOnInit(): void {
    this.expenseForm.get("transactionTable")?.valueChanges.subscribe(() => { });
  }

  // Form Data
  expenseForm = this.#fb.group({
    type: ["", Validators.required],
    amount: ["", Validators.required],
    reason: ["", Validators.required],
    transactionTable: [""]
  })

  //Expense Percentage
  expensePercentage() {
    if (this.incomeAmount && this.expenseAmount) {
      return this.expenseAmount * 100 / this.incomeAmount;
    }
    return 0;
  }

  totalExpenseTable() {
    this.totalTransactions = !this.totalTransactions;
  }

  //Total Savings
  totalSavingsPercentage() {
    if (this.incomeAmount) {
      const savings = this.incomeAmount - this.expenseAmount;
      return savings * 100 / this.incomeAmount;
    }
    return 0;
  }

  #sumTransactions(transactions: Array<ExpenseFormValue>, transactionType: ExpenseFormValue["type"]) {
    return transactions
      .filter(val => val.type === transactionType)
      .reduce((total, value) => total + Number(value.amount || 0), 0);
  }

  //expense submit
  expenseSubmitForm() {
    const formValue = this.expenseForm.value as ExpenseFormValue;
    this.expenseForm.reset();

    //Data pushing into Array
    this.incomeExpenseList.push(formValue)
    this.incomeAmount = this.#sumTransactions(this.incomeExpenseList, "income");
    this.expenseAmount = this.#sumTransactions(this.incomeExpenseList, "expense");

    this.totalSavings = this.incomeAmount - this.expenseAmount;
  }
}
