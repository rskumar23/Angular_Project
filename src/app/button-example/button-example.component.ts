import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.css']
})
export class ButtonExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MyName='Rahul Suryawanshi';  
  getName(){
    alert('Rahul');
  }
  
  getParaName(name){
    alert(name);
  }
  
  getNameFromVar(name){
    alert(name);
  }

}
