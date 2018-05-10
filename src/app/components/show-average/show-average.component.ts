import { Component, OnInit } from '@angular/core';

import { MarketplaceService } from '../../services/marketplace/marketplace.service'
import { Rating } from '../../models/rating.model';

@Component({
  selector: 'app-show-average',
  templateUrl: './show-average.component.html',
  styleUrls: ['./show-average.component.css']
})
export class ShowAverageComponent implements OnInit {
  ratings: Array<Rating> = [
    { value: "AAAAA", label: "A**"},
    { value: "AAAA", label: "A*"},
    { value: "AAA", label: "A++"},
    { value: "AA", label: "A+"},
    { value: "A", label: "A"},
    { value: "B", label: "B"},
    { value: "C", label: "C"},
    { value: "D", label: "D"}
  ];
  rating: Rating;

  constructor(private loanService: MarketplaceService) {}

  ngOnInit() {
  }

  receiveRating($event) {
    this.rating = $event;
  }
}
