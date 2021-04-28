import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-card',
  templateUrl: './extended-card.component.html',
  styleUrls: ['./extended-card.component.css']
})
export class ExtendedCardComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
