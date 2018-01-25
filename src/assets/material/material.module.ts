/**
 * Created by sheilstk on 6/16/17.
 */
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatAutocompleteModule, MatMenuModule, MatToolbarModule, MatInputModule, MatIconModule,
  MatListModule, MatSliderModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatSidenavModule,
  MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatAutocompleteModule, MatMenuModule, MatToolbarModule,
    MatInputModule, MatIconModule, MatListModule, MatSliderModule, MatProgressSpinnerModule,
    MatTableModule, MatSortModule, MatSidenavModule, MatSlideToggleModule, MatRadioModule,
    MatSelectModule, MatCheckboxModule],
  exports: [MatButtonModule, MatAutocompleteModule, MatMenuModule, MatToolbarModule,
    MatInputModule, MatIconModule, MatListModule, MatSliderModule, MatProgressSpinnerModule,
    MatTableModule, MatSortModule, MatSidenavModule, MatSlideToggleModule, MatRadioModule,
    MatSelectModule, MatCheckboxModule],
})
export class MaterialModule { }

