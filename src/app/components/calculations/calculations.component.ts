import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace/marketplace.service';
import { Loan } from '../../models/loan.model';
import { Rating } from '../../models/rating.model';
import { Results } from './results.model';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  ratings: Array<Rating> = [
    { value: "AAAAA", label: "A**" },
    { value: "AAAA", label: "A*" },
    { value: "AAA", label: "A++" },
    { value: "AA", label: "A+" },
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" }
  ];
  results: Results;

  constructor(private marketplaceService: MarketplaceService) { }

  getLoans(rating, loansAmount) {
    this.marketplaceService
      .getLoans(rating.value, ["amount"], loansAmount)
      .subscribe((loans: Loan[]) => 
      this.results = {
        average: this.calculateAverage(loans)
      });
  }

  getLoansAmount(rating){
    this.marketplaceService
      .getLoansAmount()
      .subscribe(response => 
        this.getLoans(rating, response.headers.get('X-Total'))
      );
  }

  calculateAverage(loans: Loan[]): number {
    let loansSum: number = 0;
    loans.forEach(loan => loansSum += loan.amount);
    return loansSum / loans.length;
  }
}
