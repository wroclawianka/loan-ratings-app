import { Component } from '@angular/core';

import { MarketplaceService } from '../../services/marketplace/marketplace.service'
import { Rating } from '../../models/rating.model';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-show-average',
  templateUrl: './show-average.component.html',
  styleUrls: ['./show-average.component.css']
})
export class ShowAverageComponent  {
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
  average : number;

  constructor(private marketplaceService: MarketplaceService) {}
  
  getLoans(rating) {
    this.marketplaceService
    .getLoans(rating.value, ["amount"])
    .subscribe((loans: Loan[]) => this.average = this.calculateAverage(loans));
  }

  calculateAverage(loans : Loan[]) : number{
    let loansSum : number = 0;
    loans.forEach(loan => loansSum += loan.amount);
    return loansSum / loans.length;
  }
}
