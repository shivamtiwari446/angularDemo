import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { Routes } from '@angular/router'; 
import { ColorAppliedComponent } from './ui/color-applied/color-applied.component';
import { InputcolorComponent } from './ui/inputcolor/inputcolor.component';
import { FormsModule } from '@angular/forms';


// const appRoutes: Routes = [
    
//   {
//       path        : 'inventory',
//       loadChildren: () => import('./ui/ui.module').then(m => m.UIModule)
//   },

// ]

@NgModule({
  declarations: [
    AppComponent,
    ColorAppliedComponent,
    InputcolorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   // UIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
