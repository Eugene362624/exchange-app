import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    @Input() status: string | undefined
    @Input() text: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
