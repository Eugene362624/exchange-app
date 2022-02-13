import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replenishment',
  templateUrl: './replenishment.component.html',
  styleUrls: ['./replenishment.component.scss']
})
export class ReplenishmentComponent implements OnInit {
  selectedBank = 1
  banks = [
    {id:1, name: 'Тинькофф'},
    {id:2, name: 'СберБанк'},
    {id:3, name: 'АльфаБанк'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
