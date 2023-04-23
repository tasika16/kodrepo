import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import { Observable } from "rxjs";
import { ModalService } from "../../services/modal.service";

import { ChangeRateDto } from "../../dtos/changeRate.dto";
import { CurrencyService } from "../../services/currency.service";

@Component({
  selector: 'app-new-change-rate-dialog',
  templateUrl: './new-change-rate-dialog.component.html',
  styleUrls: ['./new-change-rate-dialog.component.scss']
})
export class NewChangeRateDialogComponent {
  public display$ :Observable<'open'| 'close'>;
  changeRateDto = new ChangeRateDto();
  changeRateError :string;

  @Output()
  changeRateUpdate = new EventEmitter<ChangeRateDto>();

  @HostBinding('class.open') get open() {
    return this.modalService.isOpen();
  }

  constructor(private modalService :ModalService, private currencyService :CurrencyService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  save() {
    this.currencyService.addNewCurrency(this.changeRateDto).subscribe({
      next: (result) => {
        this.changeRateUpdate.emit(result);
        this.modalService.close();
      },
      error: (error) => {
        if (error.error.code === 'duplicate') {
          this.changeRateError = 'Ez az átváltás már szerepel!';
        }
      }
    });
  }

  close(event :any) {
    event.preventDefault();
    this.modalService.close();
  }
}
