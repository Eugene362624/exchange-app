import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-deposit',
  templateUrl: './new-deposit.component.html',
  styleUrls: ['./new-deposit.component.scss']
})
export class NewDepositComponent implements OnInit {
  balance = 0.0338884324823
  selectedPeriod = 1
  status = {type: '', text: ''}
  statuses = [
    {type: 'success', text: 'Депозит успешно создан'},
    {type: 'fail', text: 'Депозит не создан'}
  ]
  periods = [
    {id: 1, value: 10},
    {id: 2, value: 15},
    {id: 3, value: 20},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: any) {
    this.status == this.statuses[1] ?
    this.status = this.statuses[0] :
    this.status = this.statuses[1] 
  }
}
