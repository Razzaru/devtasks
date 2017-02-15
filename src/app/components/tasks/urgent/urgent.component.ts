import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urgent',
  templateUrl: './urgent.component.html',
  styleUrls: ['./urgent.component.css']
})
export class UrgentComponent implements OnInit {

  shown: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.shown = !this.shown;
  }

}
