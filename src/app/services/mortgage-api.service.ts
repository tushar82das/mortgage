import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILoans } from '../loans';

@Injectable()
export class MortgageApiService {

  baseURL: string = "http://localhost:3000/";
  constructor(private _http: HttpClient) { }

  applyLoan(loans: ILoans): Observable<ILoans> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(loans);
    console.log(body)
    return this._http.post<ILoans>(this.baseURL + 'appliedloans', body, { 'headers': headers })
  }

  getLoans(): Observable<ILoans[]> {
    return this._http.get<ILoans[]>(this.baseURL + 'appliedloans');
  }

}
