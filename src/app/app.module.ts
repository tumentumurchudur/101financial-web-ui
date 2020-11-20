import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowchartComponent } from './components/flowchart/flowchart.component';
import { MoneyInComponent } from './components/money-in/money-in.component';
import { MoneyOutComponent } from './components/money-out/money-out.component';
import { CashAccountsComponent } from './components/cash-accounts/cash-accounts.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowchartComponent,
    MoneyInComponent,
    MoneyOutComponent,
    CashAccountsComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
