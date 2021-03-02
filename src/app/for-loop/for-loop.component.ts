import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
data:any
  constructor() { }

  ngOnInit(): void {
    // this.data=['Rahul','Aniket','Subahan','Yogesh'];
    this.data=[
      {
        name:'Rahul',
        age:25,
        email:'xyz@abc.com'
      },
      {
        name:'Aniket',
        age:25,
        email:'xyz@abc.com'
      },
      {
        name:'Subahan',
        age:28,
        email:'xyz@abc.com'
      },
      {
        name:'Yogesh',
        age:28,
        email:'xyz@abc.com'
      }
    ]
  }

}
