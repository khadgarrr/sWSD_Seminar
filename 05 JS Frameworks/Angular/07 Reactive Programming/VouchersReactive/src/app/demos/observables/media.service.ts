import { Injectable } from '@angular/core';
import { MediaItem } from '../media-item';
import { MovieGenerator } from './movie-generator';
import { Observable } from 'rxjs/Observable';
import { Observer, BehaviorSubject } from 'rxjs';

@Injectable()
export class MediaService {
  
  private intervalSec = 3;
  private media$: MediaItem[] = [];
  private mediaBS$: MediaItem[] = [];
  
  constructor() {    }

  getMedia(itemCount: number = 10): Observable<MediaItem[]> {
    
    console.log("using: getMedia()")
    console.log("reset media$")
    this.media$ = [];

    let movieGenerator = MovieGenerator(itemCount);
    
    let mediaObservableArray: Observable<MediaItem[]> = Observable.create(
      (observer: Observer<MediaItem[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.media$.push(movieGenerator.next().value)          
        }
        observer.next(this.media$);       
        observer.complete();
      }
    );
    return mediaObservableArray;
  }

  getMediaStream(itemCount: number = 10): Observable<MediaItem[]> {
    
    console.log("using: getMediaStream()")
    console.log("reset media$")
    this.media$ = [];

    let movieGenerator = MovieGenerator(itemCount);
    
    let mediaObservableArray: Observable<MediaItem[]> = Observable.create(
      (observer: Observer<MediaItem[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.addItemwWithDelay(i, movieGenerator.next().value,observer)
        }
      }
    );
    return mediaObservableArray;
  }
  
  private addItemwWithDelay(idx: number, item: MediaItem, observer: Observer<MediaItem[]>):void{
    setTimeout(() => {
      this.media$.push(item);
      observer.next(this.media$);
    }, (idx + this.intervalSec) * 1000);
  }

  private buildMedia(initialCount: number) : MediaItem[] {
    let movieGenerator = MovieGenerator(initialCount);

    this.mediaBS$ = new Array();
    for (let i = 0; i < initialCount; i++) {
      this.mediaBS$.push(movieGenerator.next().value)
    }
    return this.mediaBS$;
  }

  getObservableUsingBehaviorSubj(initialCount: number = 8): Observable<MediaItem[]> {

    console.log("using: getObservableUsingBehaviorSubj()")
    let bs: BehaviorSubject<MediaItem[]> = new BehaviorSubject<MediaItem[]>(this.buildMedia(initialCount));
    return bs.asObservable();
  }

}
