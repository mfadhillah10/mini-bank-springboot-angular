import { ParentComponent } from './../parent/parent.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: String = '';
  showHide = false;

  constructor() { }

  ngOnInit() {
  }

}
