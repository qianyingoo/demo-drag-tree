import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatIconModule, MatButtonModule, MatButtonToggleModule,
  MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatInputModule, MatGridListModule,
  MatCardModule, MatSnackBarModule, MatDialogModule,
  MatTooltipModule, MatChipsModule, MatSelectModule,
  MatAutocompleteModule, MatMenuModule, MatTabsModule,
  MatTreeModule, MatCheckboxModule, MatDatepickerModule,
  MatRadioModule, MatProgressSpinnerModule, MatStepperModule, MatSortModule, MatExpansionModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatIconModule,
    MatButtonToggleModule, MatRippleModule, MatSidenavModule,
    MatToolbarModule, MatListModule, MatFormFieldModule,
    MatTableModule, MatPaginatorModule, MatInputModule,
    MatGridListModule, MatCardModule, MatSnackBarModule,
    MatDialogModule, MatTooltipModule, MatDialogModule,
    MatChipsModule, MatAutocompleteModule, MatMenuModule,
    MatTabsModule, MatTreeModule, MatCheckboxModule,
    MatDatepickerModule, MatRadioModule, MatSelectModule,
    MatProgressSpinnerModule, MatStepperModule, MatSortModule,
    MatExpansionModule, DragDropModule
  ]
})
export class UiModuleModule {
}
