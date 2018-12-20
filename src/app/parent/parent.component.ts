import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name: String;
  showHide = false;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.showHide = true;
  }

  hide() {
    this.showHide = false;
  }

}
