import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InputcolorComponent } from './inputcolor.component';

const routes: Routes = [
    {
        path: 'input',
        component: InputcolorComponent,
    }
];

@NgModule({
    declarations: [
        InputcolorComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule, 
        RouterModule.forChild(routes),
 

    ], 

})
export class InputcolorModule {
}

