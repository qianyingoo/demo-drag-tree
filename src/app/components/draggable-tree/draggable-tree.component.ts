import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {transformData} from './utils';

@Component({
  selector: 'app-draggable-tree',
  templateUrl: './draggable-tree.component.html',
  styleUrls: ['./draggable-tree.component.less']
})
export class DraggableTreeComponent implements OnInit, OnChanges {

  @Input() dataSource = [];
  @Output() dataSourceChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource.length) {
      transformData(this.dataSource, 0, true);
    }
  }
}
