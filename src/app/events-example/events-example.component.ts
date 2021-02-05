import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-example',
  templateUrl: './events-example.component.html',
  styleUrls: ['./events-example.component.css']
})
export class EventsExampleComponent implements OnInit {

  constructor() { }
  textBoxValue="";
  ngOnInit(): void {
  }

  myEvent(evt){
    console.warn(evt);
  }

  getVal(val){
    console.warn(val);
    this.textBoxValue=val;
  }
}
