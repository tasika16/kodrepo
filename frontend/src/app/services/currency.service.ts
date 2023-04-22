import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {ChangeRateDto} from "../dtos/changeRate.dto";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private getCurrenciesUrl = 'http://localhost:3000/symbols';
  private changeRateUrl = 'http://localhost:3000/convert';

  constructor(private http :HttpClient) { }

  getCurrencies() :Observable<string[]> {
    return this.http.get<string[]>(this.getCurrenciesUrl);
  }

  convertRate(changeRateDto :ChangeRateDto) :Observable<number> {
    this.changeRateUrl += `?from=${changeRateDto.from}&to=${changeRateDto.to}&amount=${changeRateDto.amount}`;
    return this.http.get<number>(this.changeRateUrl);
  }
}
