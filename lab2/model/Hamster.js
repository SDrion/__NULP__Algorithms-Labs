"use strict";
exports.__esModule = true;
exports.Hamster = void 0;
var Hamster = /** @class */ (function () {
    function Hamster(dailyFood, greedinesPerNeighbor, numberOfNeighbor) {
        this.dailyFood = dailyFood;
        this.greedinesPerNeighbor = greedinesPerNeighbor;
        this.totalGreedinesValue = dailyFood + (greedinesPerNeighbor * numberOfNeighbor);
    }
    return Hamster;
}());
exports.Hamster = Hamster;
