import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputcolorModule } from './inputcolor/inputcolor.module'; 
import { ColorAppliedComponent } from './color-applied/color-applied.component';



@NgModule({ 
  imports: [ 
    // InputcolorModule, 
    // colorappliedModule,
    CommonModule
  ]
})
export class UIModule { }
