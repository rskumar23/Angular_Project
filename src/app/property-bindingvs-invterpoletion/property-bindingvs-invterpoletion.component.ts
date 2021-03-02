import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bindingvs-invterpoletion',
  templateUrl: './property-bindingvs-invterpoletion.component.html',
  styleUrls: ['./property-bindingvs-invterpoletion.component.css']
})
export class PropertyBindingvsInvterpoletionComponent implements OnInit {
  name="Rahul";
  constructor() { }
  disabledBox = true;
  ngOnInit(): void {
  }

  enableBox(){
    this.disabledBox = false;
  }
}
