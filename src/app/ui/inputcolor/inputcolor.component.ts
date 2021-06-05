import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inputcolor',
  templateUrl: './inputcolor.component.html',
  styleUrls: ['./inputcolor.component.css']
})
export class InputcolorComponent implements OnInit {

  @Output() tableDataValues = new EventEmitter<string>();
 

  myProperty  : any;
  name : any;
  regex = "^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

  
  constructor() { }
  ngOnInit() {
  }

  onChange() {
    console.log(this.myProperty);
    this.myProperty=this.model.HexCode
    this.tableDataValues.emit(this.myProperty);
  }

  model: any = {};

 
  

}
