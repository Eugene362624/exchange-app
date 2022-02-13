import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  selectedDepositFilter = 1
  depositsFilter = [
    {id: 1, name: 'Открытые депозиты'},
    {id: 2, name: 'Закрытые депозиты'}
  ]
  deposits = [
    {
      id:1,
      startSum: 0.2323232332,
      profit: 0.0003222,
      dateStart: '01.01.2022',
      dateFinish: '01.01.2022',
      status: 'Открыт',
      percentage: 10
    },
    {
      id:2,
      startSum: 0.2323232332,
      profit: 0.0003222,
      dateStart: '01.01.2022',
      dateFinish: '01.01.2023',
      status: 'Открыт',
      percentage: 10
    },
    {
      id:3,
      startSum: 0.2323232332,
      profit: 0.0003222,
      dateStart: '01.01.2022',
      dateFinish: '01.01.2023',
      status: 'Открыт',
      percentage: 10
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
