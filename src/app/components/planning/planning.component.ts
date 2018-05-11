import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  public planItems: Array<any> = [
    {
      name: "STARTER",
      price: "$19"
    },
    {
      name: "STANDARD",
      price: "$39"
    },
    {
      name: "PREMIUM",
      price: "$99"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
}