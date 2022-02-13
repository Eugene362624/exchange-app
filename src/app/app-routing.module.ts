import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { DepositComponent } from './deposit/deposit.component';
import { Error404Component } from './error404/error404.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { ReplenishmentComponent } from './replenishment/replenishment.component';
import { SellComponent } from './sell/sell.component';
import { TopUpComponent } from './top-up/top-up.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'withdrawal', component: WithdrawalComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'sell', component: SellComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'new-deposit', component: NewDepositComponent},
  {path: 'replenishment', component: ReplenishmentComponent},
  {path: 'top-up', component: TopUpComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
