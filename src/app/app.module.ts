import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositComponent } from './deposit/deposit.component';
import { SellComponent } from './sell/sell.component';
import { HistoryComponent } from './history/history.component';
import { ReplenishmentComponent } from './replenishment/replenishment.component';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { BuyComponent } from './buy/buy.component';
import { Error404Component } from './error404/error404.component';
import { MainComponent } from './main/main.component';
import { CreditDebitPipe } from './pipes/cardPipe';
import { AlertComponent } from './reusable/alert.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TopUpComponent } from './top-up/top-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawalComponent,
    DepositComponent,
    SellComponent,
    HistoryComponent,
    ReplenishmentComponent,
    NewDepositComponent,
    BuyComponent,
    Error404Component,
    MainComponent,
    CreditDebitPipe,
    AlertComponent,
    TopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
