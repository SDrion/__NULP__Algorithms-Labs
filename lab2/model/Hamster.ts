export class Hamster {
  dailyFood: number;
  greedinesPerNeighbor: number;
  totalGreedinesValue: number;

  constructor(
    dailyFood: number,
    greedinesPerNeighbor: number,
    numberOfNeighbor: number
    ) {
      this.dailyFood = dailyFood;
      this.greedinesPerNeighbor = greedinesPerNeighbor;
      this.totalGreedinesValue = dailyFood + (greedinesPerNeighbor * numberOfNeighbor);
    }
}