import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  dataSource = [
    {
      name: 'root',
      value: 'root - value',
      remark: 'root - remark',
      children: []
    }
  ];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      const name = `parent - ${i}`;
      this.dataSource[0].children.push({
        name,
        value: `${name} - value`,
        remark: `${name} - remark`,
        children: []
      });
    }
    this.dataSource[0].children.forEach((item) => {
      for (let i = 0; i < 3; i++) {
        const name = `${item.name} - child - ${i}`;
        item.children.push({
          name,
          value: `${name} - value`,
          remark: `${name} - remark`,
          children: []
        });
      }
    });
  }

}
