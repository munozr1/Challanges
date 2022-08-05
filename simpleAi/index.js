"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var Monster_1 = require("./Monster");
var helpers_1 = require("./helpers");
// let map = Array.from(Array(25), () => new Array(25));
var n = 25;
var map = new Array(n); // create an empty array of length n
for (var i = 0; i < n; i++) {
    map[i] = new Array(n); // make each element an array
}
function main() {
    var player1 = new Player_1.Player("player1", { x: 20, y: 20 });
    var player2 = new Player_1.Player("player2", { x: 15, y: 15 });
    var player3 = new Player_1.Player("player3", { x: 10, y: 10 });
    var monster = new Monster_1.Monster("monster", { x: 5, y: 5 });
    var players = [player1, player2];
    var closest = (0, helpers_1.closestPlayer)(players, monster);
    console.log("\n\nThe closest player to the monster is: ", closest); // Should be player3
    console.log("\n\nThe beset move for the monster to reach a player is ", monster.moveMonster(closest));
}
