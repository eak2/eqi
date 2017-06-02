import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchresultRoutingModule } from './searchresult-routing.module';
import { SearchresultComponent } from './searchresult.component';
import {MdToolbarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FormControl } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SearchresultRoutingModule,MdToolbarModule, MaterialModule, ReactiveFormsModule
  ],
  declarations: [SearchresultComponent]
})
export class SearchresultModule { }
