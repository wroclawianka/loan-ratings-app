import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';
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
      .set("X-Size", loansAmount);

      const options = { 
        params : params,
        headers: headers
       } ;
      
      return this.http.get<Loan[]>(this.marketplaceUrl, options)
      .pipe(catchError(this.handleError));
    }

    getLoansAmount() {
      return this.http.get(this.marketplaceUrl, { observe: 'response' })
      .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {

        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }

      return Observable.throw(
        'Unexpected error. Please try again later.');
    };
}
