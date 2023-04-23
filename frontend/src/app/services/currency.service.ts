import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {ChangeRateDto} from "../dtos/changeRate.dto";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private getCurrenciesUrl = 'http://localhost:3000/symbols';

  constructor(private http :HttpClient) { }

  getCurrencies() :Observable<string[]> {
    return this.http.get<string[]>(this.getCurrenciesUrl);
  }

  addNewCurrency(changeRateDto :ChangeRateDto) :Observable<ChangeRateDto> {
    changeRateDto.id = `${changeRateDto.from};${changeRateDto.to}`;
    return this.http.post<ChangeRateDto>('http://localhost:3000/change-rate', changeRateDto);
  }

  convertRate(changeRateDto :ChangeRateDto) :Observable<number> {
    let changeRateUrl = 'http://localhost:3000/convert';
    changeRateUrl += `?from=${changeRateDto.from}&to=${changeRateDto.to}&amount=${changeRateDto.amount}`;
    return this.http.get<number>(changeRateUrl);
  }
}
