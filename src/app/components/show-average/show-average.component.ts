import { Component, OnInit } from '@angular/core';

import { MarketplaceService } from '../../services/marketplace/marketplace.service'

@Component({
  selector: 'app-show-average',
  templateUrl: './show-average.component.html',
  styleUrls: ['./show-average.component.css']
})
export class ShowAverageComponent implements OnInit {

  constructor(private loanService: MarketplaceService) {}
  
  ngOnInit() {
  }
}
