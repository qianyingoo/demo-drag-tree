import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-node-content',
  templateUrl: './node-content.component.html',
  styleUrls: ['./node-content.component.less']
})
export class NodeContentComponent implements OnInit {
  @Input() node;
  constructor() { }

  ngOnInit() {
  }

}
