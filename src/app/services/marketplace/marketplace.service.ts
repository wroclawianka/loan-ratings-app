import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      let fieldsRequest = this.createFields(fieldsList);
      let raitingFilter = this.createRaitingFilter(rating);
      let url = `${this.marketplaceUrl}${fieldsRequest}${raitingFilter}`;
      
      return this.http.get<Loan[]>(url);
    }

    createFields(fieldsList : string[]){
      return (fieldsList.length > 0) ? `?fields=${fieldsList.join(",")}` : "";
    }

    createRaitingFilter(rating : string){
      return (rating.length > 0) ? `&rating__in=${rating}` : "";
    }
}
