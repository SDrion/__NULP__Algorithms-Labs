export class Shoes {
  public brand: string;
  public color: string;
  public size: number;
  public price: number;

  constructor(tbrand: string, tcolor: string, tsize: number, tprice: number) {
    this.brand = tbrand;
    this.color = tcolor;
    this.size = tsize;
    this.price = tprice;
  }
}
