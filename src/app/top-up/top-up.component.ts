import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit {
  walletId = '0xa34410332A6671db1Ef44b24af1c525Af6B12B96'

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipBoard() {
    
  }
}
