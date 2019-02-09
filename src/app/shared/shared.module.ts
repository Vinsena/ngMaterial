import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ]
})
export class SharedModule { }
