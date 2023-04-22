import { Component } from '@angular/core';
import { ChangeRateDto } from "../../dtos/changeRate.dto";
import { CurrencyService } from "../../services/currency.service";

@Component({
  selector: 'app-change-rate',
  templateUrl: './change-rate.component.html',
  styleUrls: ['./change-rate.component.scss']
})
export class ChangeRateComponent {

  changeRateDto = new ChangeRateDto();
  currencies :string[];
  from :string;
  to :string;

  constructor(private currencyService :CurrencyService) {}

  async ngOnInit () {
    this.currencyService.getCurrencies().subscribe({
      next: (currencies) => {
        this.currencies = currencies;
      }
    });
  }

  convert() {
    console.log(this.changeRateDto, this.from, this.to);
    // this.currencyService.convertRate(this.changeRateDto).subscribe({
    //   next: (result) => {
    //     console.log(result);
    //   }
    // });
  }

}
