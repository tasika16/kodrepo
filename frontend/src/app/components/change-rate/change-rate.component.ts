import {Component, Input, SimpleChange} from '@angular/core';
import { ChangeRateDto } from "../../dtos/changeRate.dto";
import { CurrencyService } from "../../services/currency.service";
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
import {ModalService} from "../../services/modal.service";
registerLocaleData(localeHu, 'hu');

@Component({
  selector: 'app-change-rate',
  templateUrl: './change-rate.component.html',
  styleUrls: ['./change-rate.component.scss']
})
export class ChangeRateComponent {

  changeRateDto = new ChangeRateDto();
  currencies :string[];
  changeRateResult :number;
  changeRateError :string;

  @Input()
  changeRateDtoInput :ChangeRateDto;

  constructor(private currencyService :CurrencyService, private modalService :ModalService) {
    this.changeRateResult = 0;
  }

  ngOnchanges(changes :any) {
    this.currencies.push(changes.changeRateDtoInput.currentValue.from,
      changes.changeRateDtoInput.currentValue.to);
  }

  async ngOnInit () {
    this.currencyService.getCurrencies().subscribe({
      next: (currencies) => {
        this.currencies = currencies;
      }
    });
  }

  openNewChangeRate(event :any) {
    event.preventDefault();
    this.modalService.open();
  }

  convert() {
    this.currencyService.convertRate(this.changeRateDto).subscribe({
      next: (result) => {
        this.changeRateResult = Number(result);
      },
      error: (error) => {
        this.changeRateError = 'Ez az átváltás még nem szerepel kérlek adj meg másikat! Vagy adj hozzá újat';
      }
    });
  }
}
