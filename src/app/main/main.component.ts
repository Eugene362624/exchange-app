import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  id = 3203120
  balance = 0.00332312131123
  toBuyPages = 0
  toBuyPage = 0
  toSellPages = 0
  toSellPage = 0
  toBuy = [
    {
      id: 1,
      costInRUB: 1500,
      costInLDS: 0.0387261589473628191,
      labelImg: './assets/ledius.png'
    },
    {
      id: 2,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 3,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 4,
      costInRUB: 150000,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 5,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 6,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 7,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 8,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 9,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 10,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 11,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
  ]

  toSell = [
    {
      id: 1,
      costInRUB: 1500,
      costInLDS: 0.0387261589473628191,
      labelImg: './assets/ledius.png'
    },
    {
      id: 2,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 3,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 4,
      costInRUB: 150000,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 5,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 6,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 7,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 8,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 9,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 10,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
    {
      id: 11,
      costInRUB: 1500,
      costInLDS: 0.038726158947362819,
      labelImg: './assets/ledius.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.toBuyPages = Math.ceil(this.toBuy.length/5)
    this.toSellPages = Math.ceil(this.toSell.length/5)
  }

  getElementsToBuyPerPage() {
    return this.toBuy.slice((5*this.toBuyPage), 5*(this.toBuyPage+1))
  }

  getElementsToSellPerPage() {
    return this.toBuy.slice((5*this.toSellPage), 5*(this.toSellPage+1))
  }

  nextToBuyPage() {
    if (this.toBuyPage+1 < this.toBuyPages) this.toBuyPage++
  }

  nextToSellPage() {
    if (this.toSellPage+1 < this.toSellPages) this.toSellPage++
  }

  prevToBuyPage() {
    if (this.toBuyPage > 0) this.toBuyPage--
  }

  prevToSellPage() {
    if (this.toSellPage > 0) this.toSellPage--
  }
}
