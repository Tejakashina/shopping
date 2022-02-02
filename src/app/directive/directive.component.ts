import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
template = true
  constructor() { }

  ngOnInit(): void {
  }
workers =[
  {
    fName:"vinay",
    lName:"kumar"
  },
  {
    fName:"prabu",
    lName:"teja",
    id : 4990
  }
]
}
