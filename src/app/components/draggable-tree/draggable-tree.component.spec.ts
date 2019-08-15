import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableTreeComponent } from './draggable-tree.component';

describe('DraggableTreeComponent', () => {
  let component: DraggableTreeComponent;
  let fixture: ComponentFixture<DraggableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
