export class Car {
  public carImag: string;
  public carType: string;
  public details: string;
  public id: number;
  public manufacturerName: string;
  public milAge: string;
  public price: string;
  public year: string;

  constructor(
    carImag: string,
    carType: string,
    details: string,
    id: number,
    manufacturerName: string,
    milAge: string,
    price: string,
    year: string
  ) {
    this.carImag = carImag;
    this.carType = carType;
    this.details = details;
    this.id = id;
    this.manufacturerName = manufacturerName;
    this.milAge = milAge;
    this.price = price;
    this.year = year;
  }
}
