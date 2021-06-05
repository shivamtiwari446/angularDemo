import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'; 
import { InputcolorComponent } from './ui/inputcolor/inputcolor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'demo'; 
  @Output() colorValue1 = new EventEmitter<string>(); 
  @ViewChild(InputcolorComponent, {static: false}) child12!: InputcolorComponent;
  colorValue: any;
  isTrue=false;

  constructor(){
    this.colorValue='346beb'
  }
  ngAfterViewInit() { 
  }
  
  receivevalue() {   
    this.colorValue='#'+ this.child12.myProperty   
    } 
}
