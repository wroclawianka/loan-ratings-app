import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
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

    getLoans(rating : string, fields : string[], loansAmount : string) : Observable<Loan[]> { 
      let params = new HttpParams()
      .set('rating__in', `["${rating}"]`)
      .set('fields', `${fields.join(",")}`);

      let headers = new HttpHeaders()
      .set("X-Page", "0")
      .set("X-Size", "loansAmount");

      const options = { 
        params : params,
        headers: headers
       } ;
      
      return this.http.get<Loan[]>(this.marketplaceUrl, options);
    }

    getLoansAmount() {
      return this.http.get(this.marketplaceUrl, { observe: 'response' });
    }
}
