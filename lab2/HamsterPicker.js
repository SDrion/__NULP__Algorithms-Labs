"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.HamsterPicker = void 0;
var HamsterPicker = /** @class */ (function () {
    function HamsterPicker(hamsters, availableFood, totalHamsters) {
        this.hamsters = [];
        this.hamsters = hamsters;
        this.availableFood = availableFood;
    }
    ;
    HamsterPicker.prototype.filterBySelfGreedines = function () {
        var _this = this;
        this.hamsters = this.hamsters.filter(function (hamster) {
            return hamster.dailyFood <= _this.availableFood;
        });
    };
    ;
    HamsterPicker.prototype.picker = function () {
        while (!(this.checkForAllNeigbors())) {
            this.hamsters.pop();
        }
        return this.hamsters.length;
    };
    HamsterPicker.prototype.checkForAllNeigbors = function () {
        var sumAllTotal = 0;
        for (var _i = 0, _a = this.hamsters; _i < _a.length; _i++) {
            var ham = _a[_i];
            ham.totalGreedinesValue = ham.dailyFood + (ham.greedinesPerNeighbor * (this.hamsters.length - 1));
            sumAllTotal += ham.totalGreedinesValue;
        }
        this.bubbleSortByTotalValue();
        return sumAllTotal <= this.availableFood;
    };
    ;
    HamsterPicker.prototype.bubbleSortByTotalValue = function () {
        var array = __spreadArrays(this.hamsters);
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (array[j].totalGreedinesValue > array[j + 1].totalGreedinesValue) {
                    this.swap(array, j, j + 1);
                }
            }
        }
        this.hamsters = __spreadArrays(array);
    };
    ;
    HamsterPicker.prototype.swap = function (array, f, s) {
        var _a;
        return _a = [array[s], array[f]], array[f] = _a[0], array[s] = _a[1], _a;
    };
    ;
    return HamsterPicker;
}());
exports.HamsterPicker = HamsterPicker;
