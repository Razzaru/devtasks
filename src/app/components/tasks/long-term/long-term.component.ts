import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-term',
  templateUrl: './long-term.component.html',
  styleUrls: ['./long-term.component.css']
})
export class LongTermComponent implements OnInit {

  shown: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.shown = !this.shown;
  }
}
