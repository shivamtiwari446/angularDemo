import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { ColorAppliedComponent } from './color-applied.component';

const routes: Routes = [
    {
        path: 'colorapplied',
        component: ColorAppliedComponent,
    }
];

@NgModule({
    declarations: [
        ColorAppliedComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,  
 

    ], 

})
export class colorappliedModule {
}

