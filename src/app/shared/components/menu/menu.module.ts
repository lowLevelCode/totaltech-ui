import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
