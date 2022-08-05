"use strict";
exports.__esModule = true;
exports.printMap = exports.closestPlayer = exports.randomInt = void 0;
/**
 * Generates a random number from 0-max.
 * This can be used to randomly generate monster or
 * player coordinates
 * @param max The largest number to generate
 * @return int
 */
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
exports.randomInt = randomInt;
/**
 * Determines the closest player to the monster
 * For a 2d plane, the formula for distance between two points is:
 * c = √(Xa − Xb)^2 + (Ya − Yb)^2
 * @param Array<Player>
 * @param Monster
 * @return Player
 */
function closestPlayer(players, monster) {
    var closest;
    //TODO
    //Hint: apply the distance formula to each player
    return players[0];
}
exports.closestPlayer = closestPlayer;
function printMap(map) {
    for (var i = 0; i < map.length; i++) {
        var row = map[i];
        var rowString = "";
        for (var j = 0; j < row.length; j++) {
            var creature = row[j];
            if (creature.getName().length > 0) {
                rowString += creature.getName();
            }
            else {
                rowString += " ";
            }
        }
        console.log(rowString);
    }
}
exports.printMap = printMap;
