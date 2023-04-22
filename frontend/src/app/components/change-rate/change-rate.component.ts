import { Component } from '@angular/core';
import { ChangeRateDto } from "../../dtos/changeRate.dto";
import { CurrencyService } from "../../services/currency.service";
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NewChangeRateDialogComponent} from "../new-change-rate-dialog/new-change-rate-dialog.component";
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

  constructor(private currencyService :CurrencyService, private dialog :MatDialog) {
    this.changeRateResult = 0;
  }

  async ngOnInit () {
    this.currencyService.getCurrencies().subscribe({
      next: (currencies) => {
        this.currencies = currencies;
      }
    });
  }

  openNewChangeRate(event :any) {
    event.preventDefault()
    const dialogRef = this.dialog.open(NewChangeRateDialogComponent);
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
