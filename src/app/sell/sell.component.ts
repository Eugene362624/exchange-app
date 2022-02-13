import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  status: 'fail' | 'success' | undefined = undefined 
  balance= 0.038002132031
  selectedCard = 1
  cards = [
    {
      id:1,
      number: '5578557825575758'
    },
    {
      id:2,
      number: '3213211323213213'
    },
    {
      id:3,
      number: '6546324214242142'
    },
    {
      id:4,
      number: '4781723217932162'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: any) {
    e.preventDefault()
    // demo
    this.status === 'success' ? this.status = 'fail' : this.status = 'success'
  }

  LDStoRUBTransform() {
    return (this.balance*27110).toFixed(1) + " RUB"
  }
}
