import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  @Input('balance') balance = 0
  constructor() { }

  ngOnInit(): void {
  }

}
