import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private httpClient : HttpClient) { }

  GetExchangeRates(){
    return this.httpClient.get<any>(environment.baseUrl + "Rates/GetExchangeRates/")
  }
}
