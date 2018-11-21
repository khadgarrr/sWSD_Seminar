import { DemoItem } from './demoItem';
import { DemoService } from './demo.service';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  providers: [DemoService]
})
export class DemosComponent implements OnInit {
  title: string = '';
  demoName: string = '';
  componentName: string = '';
  demos: DemoItem[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private demoService: DemoService) { 
                this.title = 'Data Access';
              }

  ngOnInit() {   
    
    this.demoService.getItems()
      .then((result)=>{this.demos = result;});
    
    this.route.queryParams
      .subscribe(
        (params: Params) => {          
          let c: DemoItem = this.getComponent(params['title']); 
          this.demoName = params['title']!=null ? `Demo: ${params['title']} - Component: ${c!=undefined ? c.component : ''}` : 'Please select a demo' ;
        }
      );
  }

  getComponent(val) : DemoItem {
    if(this.demos!=undefined && this.demos!=null){
      return this.demos.find((el)=> {return el.title === val});
    }
  }
}
