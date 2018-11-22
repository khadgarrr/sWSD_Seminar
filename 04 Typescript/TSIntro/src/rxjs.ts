import {
  Subscription,
  Observable,
  BehaviorSubject,
  from,
  of,
  pipe,
  Observer,
  throwError,
  interval,
  fromEvent
} from "rxjs";
import { map, filter, tap, catchError, finalize, take } from "rxjs/operators";

import { Voucher, Movie } from "./model";
// import moment = require("moment");
import * as moment from "moment";
import { isArray } from "util";
import { VoucherService } from "./services";

export class RxJSDemos {
  fName: string;
  url = "vouchers.json";
  numbers = [1, 5, 10, 18, 22];

  nbrObs: Observable<number>;
  result: Voucher[];

  nbrSubscription: Subscription;

  stop: boolean = false;

  constructor() {}

  ngOnInit() {}

  useObsCreate() {
    this.fName = "useObservable.create()";

    this.nbrObs = Observable.create(observer => {
      let idx = 0;

      let getNumber = () => {
        observer.next(this.numbers[idx++]);

        if (idx < this.numbers.length) {
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

  useObsFrom() {
    this.fName = "useObsFrom()";

    this.nbrObs = from(this.numbers);
    this.nbrObs.subscribe((data: number) => console.log("useObsFrom: ", data));

    //Same as above using chaining
    // this.nbrSubscription = from(this.numbers).subscribe((data: number) =>
    //   console.log("useObsFrom: ", data)
    // );
  }

  wrapXMLHttpRequest(): Observable<any> {
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

  wrappingCallbacks() {
    this.fName = "wrappingCallbacks()";

    let load = this.wrapXMLHttpRequest().subscribe(data => {
      console.log("wrappingCallbacks:", data);
      this.result = data;
    });
  }

  mockPromise(succeed: boolean): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
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

  usePromiseToObs() {
    this.fName = "see console for output";
    let promiseBasedObj = from(this.mockPromise(true)).subscribe(data =>
      console.log("usePromiseToObs:", data)
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
    });

    this.nbrObs.subscribe((data: number) =>
      console.log("useOperator -  original: ", data)
    );

    this.nbrObs
      .pipe(map(n => n * 2))
      .subscribe((data: number) => console.log("useOperator - map: ", data));
  }

  MovieSubs: Subscription;
  MovieObs: Observable<Movie>;
  arrMovies: Movie[];
  arrMoviesObs: Observable<Movie[]>;

  createSingletonObservable() {
    let label = "Current Movie created at:";

    this.MovieObs = Observable.create((observer: Observer<Movie>) => {
      let interval = setInterval(() => {
        if (this.stop) {
          clearInterval(interval);
        }
        observer.next(<Movie>{
          title: `${label} ${moment().format("h:mm:ss a")}`
        });
      }, 1000);
    });

    this.MovieSubs = this.MovieObs.subscribe(
      (data: Movie) => {
        console.log("Movie created: ", data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("completed");
      }
    );
  }

  unsubscribeSingletonObservable() {
    if (this.MovieSubs == null) {
      console.log("No Subscription to unsubscribe");
      return;
    }
    //think about why we have to implement stop
    this.stop = true;
    this.MovieSubs.unsubscribe();
    console.log("unsbscribed MovieSubscription");
  }

  createArrayObservable() {
    let label = "Movie ";
    this.arrMovies = [];

    this.arrMoviesObs = Observable.create((observer: Observer<Movie[]>) => {
      setTimeout(() => {
        this.arrMovies.push(<Movie>{
          title: `${label} 1`,
          startTime: new Date()
        });
        observer.next(this.arrMovies);
      }, 0);
      setTimeout(() => {
        this.arrMovies.push(<Movie>{
          title: `${label} 2`,
          startTime: new Date()
        });
        observer.next(this.arrMovies);
      }, 1000);
      setTimeout(() => {
        this.arrMovies.push(<Movie>{
          title: `${label} 3`,
          startTime: new Date()
        });
        observer.next(this.arrMovies);
      }, 2000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        this.arrMovies.push(<Movie>{
          title: `${label} 4`,
          startTime: new Date()
        });
        observer.next(this.arrMovies);
      }, 4000);
    });

    this.arrMoviesObs.subscribe(data => {
      console.log("Current Movies Array: ", data);
      this.arrMovies = data;
    });
  }

  sub: Subscription = null;
  unsbscribe = () => (this.sub != null ? this.sub.unsubscribe() : null);
  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });
  vs: VoucherService = new VoucherService();

  vouchers: Voucher[] = null;

  log = (msg: string, data: any) => {
    console.log(`executing ${msg}, 'data' is Array: ${isArray(data)}`, data);
    this.vouchers = isArray(data) ? data : [data];
  };

  useMap() {
    this.vs
      .getVouchersObs()
      .pipe(
        //Obs Operator map()
        map(vs => {
          //ES6 array.map()
          return vs.map(v => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`
          }));
        })
      )
      .subscribe(data => this.log("use map() - RxJS 5 pattern", data));
  }

  usePipeMapAndTap() {
    //RxJS 6 pattern
    // tap() is the RxJS replacement for do() to ensure ES compatibility
    this.vs
      .getVouchersObs()
      .pipe(
        tap(data => console.log("logged by tap(): ", data)),
        map(vs => vs.map(this.setLabel))
      )
      .subscribe(data => this.log("use pipe(), map() & tap()", data));
  }

  errHandling() {
    this.vs
      .getVouchersObs()
      .pipe(
        tap(data => console.log("logged by tap(): ", data)),
        map(vs => vs.map(this.setLabel)),
        catchError(err => {
          return throwError("Err happened while processing vouchers");
        }),
        finalize(() => console.log("finalizing ..."))
      )
      .subscribe(data => this.log("errHandling", data));
  }

  getByID() {
    this.vs
      .getVouchersObs()
      .pipe(map(v => v.find((v: Voucher) => v.ID == 3)))
      .subscribe(data => this.log("getByID - using find()", data));
  }

  useFilter() {
    this.vs
      .getVouchersObs()
      .pipe(map(v => v.filter((v: Voucher) => v.Paid)))
      .subscribe(data => this.log("useFilter", data));
  }

  //Compare the two outputs
  useTake() {
    this.vs
      .getVouchersObs()
      .pipe(take(3))
      .subscribe(data => this.log("useTake", data));

    interval(1000)
      .pipe(take(3))
      .subscribe(x => console.log(x));
  }

  mouseSubs: Subscription;

  useMouse() {
    let pad = document.querySelector(".signPad");
    let mouse = fromEvent(pad, "mousemove").pipe(
      map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
    );

    var drawpad = <HTMLCanvasElement>document.querySelector(".signPad");
    var ctxDraw = drawpad.getContext("2d");

    this.mouseSubs = mouse.subscribe(point => {
      console.log("Mouse Moved @: ", point);
      // http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
    });
  }

  unsubscribeMouseEvt() {
    this.mouseSubs.unsubscribe();
    console.log("unsubscribed from Mouse Event");
  }
}
