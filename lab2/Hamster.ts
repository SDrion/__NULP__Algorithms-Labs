export class Hamster {
  dailyFood: number;
  greedinesPerNeighbor: number;
  private _totalGreedinesValue: number;

  constructor(
    dailyFood: number,
    greedinesPerNeighbor: number,
    numberOfNeighbor: number
    ) {
      this.dailyFood = dailyFood;
      this.greedinesPerNeighbor = greedinesPerNeighbor;
      this.recalculateTotalGreedines(numberOfNeighbor);
    }

    recalculateTotalGreedines(numberOfNeighbor: number) {
      this._totalGreedinesValue = this.dailyFood + (this.greedinesPerNeighbor * numberOfNeighbor)
    }

    public get totalGreedinesValue(): number {
      return this._totalGreedinesValue;
    }
}