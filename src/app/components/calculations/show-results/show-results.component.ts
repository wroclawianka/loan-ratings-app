import { Component, OnInit, Output, Input } from '@angular/core';
import { Results } from '../results.model';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {
  @Input() results : Results;

  constructor() { }

  ngOnInit() {
  }

}
