/**
 * Important.
 * Best Practice. Isolates Material code and keeps App Module Very neatly.
 */
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const Material = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
