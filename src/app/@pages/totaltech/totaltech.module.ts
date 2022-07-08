import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotaltechRoutingModule } from './totaltech-routing.module';
import { TotaltechComponent } from './totaltech.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from "../../shared/components/menu/menu.module";

@NgModule({
  declarations: [TotaltechComponent],
  imports: [
    CommonModule,
    TotaltechRoutingModule,
    MatSidenavModule,
    MenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class TotaltechModule { }
