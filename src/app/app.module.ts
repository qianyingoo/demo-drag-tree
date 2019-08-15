import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DraggableTreeComponent} from './components/draggable-tree/draggable-tree.component';
import {NodeContentComponent} from './components/draggable-tree/tree-node/node-content/node-content.component';
import {TreeNodeComponent} from './components/draggable-tree/tree-node/tree-node.component';
import {UiModuleModule} from './ui-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DraggableTreeComponent,
    TreeNodeComponent,
    NodeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
