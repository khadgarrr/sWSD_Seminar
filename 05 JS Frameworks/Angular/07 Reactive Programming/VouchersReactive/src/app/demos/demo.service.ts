import { HttpClient } from '@angular/common/http';
import { DemoItem } from './demoItem';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MediaItem } from './media-item';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { MovieGenerator } from './observables/movie-generator';


@Injectable()
export class DemoService {

  private items: DemoItem[];

  constructor(private httpClient: HttpClient) {
   
  }

  getItems(): Promise<any> {
    return this.httpClient.get("/assets/demos.json").toPromise();
  }

}