import { Component } from '@angular/core';
import {ChangeRateDto} from "./dtos/changeRate.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fronted';

  changeRateDtoInput :ChangeRateDto;

  updateChangeRate(data :ChangeRateDto) {
    this.changeRateDtoInput = data;
  }
}
