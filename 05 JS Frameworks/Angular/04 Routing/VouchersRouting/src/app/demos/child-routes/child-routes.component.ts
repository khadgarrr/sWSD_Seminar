import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-routes',
  templateUrl: './child-routes.component.html',
  styleUrls: ['./child-routes.component.css']
})
export class ChildRoutesComponent implements OnInit {

  routeTbl = null;

  constructor(private router: Router) {
    this.routeTbl = router.config;
   }

  ngOnInit() {
  }

}
