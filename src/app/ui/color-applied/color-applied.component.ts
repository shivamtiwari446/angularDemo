import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-applied',
  templateUrl: './color-applied.component.html',
  styleUrls: ['./color-applied.component.css']
})
export class ColorAppliedComponent implements OnInit {

  @Input() name: any;
  vitalItem: any;

  constructor() { 
    console.log('Input code ==>',this.name);
   }

  ngOnInit(): void { 
    console.log('Input code ==>',this.name);
    
  }

}
