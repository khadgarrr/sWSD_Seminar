import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  person = {id: 1, name: "Alex", age: 47, imgUrl: ""};
  
  constructor() { }

  ngOnInit() {
  }

}
