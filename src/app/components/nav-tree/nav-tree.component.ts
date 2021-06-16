import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.css']
})
export class NavTreeComponent implements OnInit {
@Input() category : any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
