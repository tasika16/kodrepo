export class ChangeRateDto {
  public from :string;
  public to :string;
  public amount :number;

  get amountDisplay() :string {
    return this.amount.toLocaleString('hu');
  }
}
