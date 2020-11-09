"use strict";
exports.__esModule = true;
var fs = require("fs");
var Hamster_1 = require("./model/Hamster");
var HamsterPicker_1 = require("./HamsterPicker");
function readHamster() {
    var data = fs.readFileSync('./hamstr_in.txt', 'utf8');
    var dataLines = data.split(/\r?\n/);
    var availableFood = Number(dataLines[0]);
    var totalHamsters = Number(dataLines[1]);
    var hamsters = [];
    for (var i = 2; i < dataLines.length; i++) {
        hamsters.push(new Hamster_1.Hamster(Number(dataLines[i].split(" ")[0]), Number(dataLines[i].split(" ")[1]), 0));
    }
    return { availableFood: availableFood, totalHamsters: totalHamsters, hamsters: hamsters };
}
function writeResult(result) {
    fs.writeFile('hamstr_out.txt', result, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
function launcher() {
    var fileData = readHamster();
    var picker = new HamsterPicker_1.HamsterPicker(fileData.hamsters, fileData.availableFood, fileData.totalHamsters);
    picker.filterBySelfGreedines();
    if (picker.hamsters.length !== 0) {
        writeResult("You can buy: " + picker.picker() + " hamster");
    }
    else {
        writeResult('You cant afford a hamster');
    }
}
launcher();
