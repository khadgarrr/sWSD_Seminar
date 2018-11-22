import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

  movies: Movie[]

  constructor(private ms: MovieService) { }

  ngOnInit() {
    
  }

  fillFlexbox(){
    this.movies = this.ms.getMovies();
  }

}
