import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Loan } from '../../models/loan.model'

@Injectable()
export class MarketplaceService {

  private apiRoot = environment.apiEndpoint;
  private loansUrl = `${this.apiRoot}loans/`;
  private marketplaceUrl = `${this.loansUrl}marketplace`

  constructor(
    private http : HttpClient) {}

    getLoans(rating : string, fieldsList : string[]) : Observable<Loan[]> {    
      const options = { 
        params : new HttpParams()
        .set('rating__in', `["${rating}"]`)
        .set('fields', `${fieldsList.join(",")}`),
       } ;
      
      return this.http.get<Loan[]>(this.marketplaceUrl, options);
    }
}
