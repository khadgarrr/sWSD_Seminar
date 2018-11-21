import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs";
import 'rxjs/add/observable/fromPromise';
import { Voucher } from "../../shared/index";

@Component({
  selector: "app-simple-observable",
  templateUrl: "./simple-observable.component.html",
  styleUrls: ["./simple-observable.component.scss"]
})
export class SimpleObservableComponent implements OnInit {
  
  fName: string;
  url = "/assets/vouchers.json";
  numbers = [1, 5, 10, 18, 22];

  nbrObs: Observable<number>;
  result: Voucher[];

  nbrSubscription : Subscription;
  
  constructor() {}

  ngOnInit() {}

  useObsFrom() {

    this.fName = "useObsFrom()";

    this.nbrObs = Observable.from(this.numbers);
    
    this.nbrObs.subscribe((data: number) =>  console.log("useObsFrom: ", data))

    //Same as above using chaining
    this.nbrSubscription = Observable.from(this.numbers).subscribe((data: number) =>
      console.log("useObsFrom: ", data)
    );
  }

  useObsCreate() {

    this.fName = "useObsCreate()";

    this.nbrObs = Observable.create(observer => {
      let index = 0;

      let getNumber = () => {
        observer.next(this.numbers[index++]);

        if (index < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    });

    this.nbrObs.subscribe((data: number) =>
      console.log("useObsCreate: ", data)
    );
  }

  useOperator() {

    this.fName = "useOperator()";

    this.nbrObs = Observable.create(observer => {
      let index = 0;

      let getNumber = () => {
        observer.next(this.numbers[index++]);

        if (index < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    })
      .map(n => n * 2)
      .filter(n => n > 4);

    this.nbrObs.subscribe((data: number) =>
      console.log("useOperator: ", data)
    );
  }

  simpleLoad(): Observable<any> {
 
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        } else {
          observer.error(xhr.statusText);
        }
      });

      xhr.open("GET", this.url);
      xhr.send();
    });
  }

  useAsyncToObs() {

    this.fName = "usePromiseToObs()";

    let load = this.simpleLoad().subscribe(data => {
      console.log("data loaded", data)
      this.result = data;
    });
  }

  getPromise(succeed: boolean) : Promise<number[]>{
    
    return new Promise<number[]>((resolve, reject)=>{
      setTimeout(() => {
        console.log("Async Task Complete");
        if (succeed) {
          resolve(this.numbers);
        } else {
          reject("Outcome: Promise rejected");
        }
      }, 1000);
    });
  }

  usePromiseToObs(){

    this.fName = "see console for output";
    let pObs = Observable.fromPromise(this.getPromise(true)).subscribe(data=>console.log("usePromiseToObs", data));

  }

}
