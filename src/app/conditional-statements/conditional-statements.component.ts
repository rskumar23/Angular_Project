import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-statements',
  templateUrl: './conditional-statements.component.html',
  styleUrls: ['./conditional-statements.component.css']
})
export class ConditionalStatementsComponent implements OnInit {
  show = false;
  showMe = 'no';
  color = "green"
  constructor() { }

  ngOnInit(): void {
  }

}
