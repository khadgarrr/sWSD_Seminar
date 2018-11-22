import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<div class='section'>
             <h4>{{msg}}</h4>
             By using backticks I can use mulitline text
             </div>
            `,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  msg: string = "I am defining my html inline by using template metadata";

  constructor() { }

  ngOnInit() {
  }

}
