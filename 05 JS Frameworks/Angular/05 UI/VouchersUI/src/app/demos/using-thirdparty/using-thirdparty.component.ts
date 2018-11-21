import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-thirdparty',
  templateUrl: './using-thirdparty.component.html',
  styleUrls: ['./using-thirdparty.component.css']
})
export class UsingThirdpartyComponent implements OnInit {    

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  data: any[] = [
    {
      "name": "Germany",
      "value": 40632
    },
    {
      "name": "Spain",
      "value": 49737
    },
    {
      "name": "Austria",
      "value": 36745
    }
  ];

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    
  }
  
}
