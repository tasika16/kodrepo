export class ChangeRateDto {
  public id? :string;
  public from :string;
  public to :string;
  public amount :number;
  public rate :number;

  get amountDisplay() :string {
    return this.amount.toLocaleString('hu');
  }
}
