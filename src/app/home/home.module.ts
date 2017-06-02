import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';
import { FormControl } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    HomeRoutingModule, 
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
