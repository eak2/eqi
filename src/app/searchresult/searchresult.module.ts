import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchresultRoutingModule } from './searchresult-routing.module';
import { SearchresultComponent } from './searchresult.component';


@NgModule({
  imports: [
    CommonModule,
    SearchresultRoutingModule
  ],
  declarations: [SearchresultComponent]
})
export class SearchresultModule { }
