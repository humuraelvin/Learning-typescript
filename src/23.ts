class MyRangeRover {
  public make: string;
  public model: string;
  public year: number;
  protected vineNumber: 3456678;
  private doorLockCode: 123456;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Buggatti extends MyRangeRover {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }
}

const Buggatti1 = new Buggatti("buggati", "buggatti", 2020);
