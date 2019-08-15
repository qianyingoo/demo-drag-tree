import {Component, ElementRef, Input, NgZone, OnInit} from '@angular/core';
import {dragData, removeItem, setObjLevel, transformData} from '../utils';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.less']
})
export class TreeNodeComponent implements OnInit {
  @Input() node;
  @Input() parentData = {};
  prefix = 'drag-tree';
  draggable = true;
  dragOverClass = '';
  dragNodeHighlight = false; // 拖拽元素是否高亮

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const dragBox = this.elementRef.nativeElement.querySelector('#dragBox');
      fromEvent<DragEvent>(dragBox, 'dragstart')
        .subscribe((e: DragEvent) => this.onDragStart(e));
      fromEvent<DragEvent>(dragBox, 'dragenter')
        .subscribe((e: DragEvent) => this.onDragEnter(e));
      fromEvent<DragEvent>(dragBox, 'dragover')
        .subscribe((e: DragEvent) => this.onDragOver(e));
      fromEvent<DragEvent>(dragBox, 'dragleave')
        .subscribe((e: DragEvent) => this.onDragLeave(e));
      fromEvent<DragEvent>(dragBox, 'drop')
        .subscribe((e: DragEvent) => this.onDrop(e));
      fromEvent<DragEvent>(dragBox, 'dragend')
        .subscribe((e: DragEvent) => this.onDragEnd(e));
    });
  }

  toggleCollapseStatus(e) {
    e.stopPropagation();
    // 展开或收起节点
    this.node.isExpand = !this.node.isExpand;
  }

  onDragStart(e) {
    console.log('start');
    e.stopPropagation();
    if ('INPUT, MAT-SELECT'.includes(document.activeElement.tagName)) {
      e.preventDefault();
      return;
    }
    this.dragNodeHighlight = true;
    e.dataTransfer.effectAllowed = 'move';
    this.node.isExpand = false;
    // 存储拖动元素数据
    dragData.current.nodeData = this.node;
    dragData.current.parent = this.parentData;
  }

  onDragEnter(e) {
    console.log('enter');
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      // 进入目标元素的样式
      this.dragOverClass = 'tree-drag-over';
    });
    // 存储目标元素数据
    dragData.target.nodeData = this.node;
    dragData.target.parent = this.parentData;
  }

  onDragOver(e) {
    console.log('over');
    e.preventDefault();
    e.stopPropagation();
  }

  onDragLeave(e) {
    console.log('leave');
    e.preventDefault();
    e.stopPropagation();
    this.dragOverClass = '';
    dragData.target.nodeData = {};
    dragData.target.parent = {};
  }

  onDrop(e) {
    console.log('drop');
    e.preventDefault();
    e.stopPropagation();
    console.log(dragData);
    if (dragData.current.nodeData === dragData.target.nodeData) {
      return;
    }
    this.dragOverClass = '';
    const target = dragData.target.nodeData;
    const targetParent = dragData.target.parent;
    const targetIndex = targetParent.children ? targetParent.children.indexOf(dragData.target.nodeData) : 0;
    const currentNode = dragData.current.nodeData;
    setObjLevel(currentNode, target.level + 1);
    target.children = target.children || [];
    this.ngZone.run(() => {
      target.children.push(currentNode);
      removeItem(currentNode, dragData.current.parent.children);
    });
  }

  onDragEnd(e) {
    e.stopPropagation();
    e.preventDefault();
    this.ngZone.run(() => {
      this.dragNodeHighlight = false;
    });
  }
}
