import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rating } from '../../../models/rating.model';

@Component({
  selector: 'app-select-rating',
  templateUrl: './select-rating.component.html',
  styleUrls: ['./select-rating.component.scss']
})
export class SelectRatingComponent implements OnInit {
  @Input() ratings : Array<Rating>;
  @Output() ratingEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectRating(rating : string) {
      this.ratingEvent.emit(rating);
  }

}