import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenav,
  MatSidenavContainer,
  MatList,
  MatToolbar,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatDatepicker,
  MatDatepickerToggle,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggle,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatRadioButton,
  MatRadioGroup
} from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const mods = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatRadioModule,
  FlexLayoutModule,
];

@NgModule({
  imports: mods,
  declarations: [],
  exports: mods
})
export class MaterialModule { }
