"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Monster = void 0;
var Creature_1 = require("./Creature");
/*

For this challenge, you will create a simple ai for a 2d rpg game. The specifics of the game are
irrelevant for this challenge. Simply put, the ai will be used for monsters which will try to
move as close to the player as possible. Each turn the monster only has 5 moves available.

An application example is provided as a png file in the repo.


DO NOT:
1. Collaborate
2. Ask questions already awnsered on this instruction set.

A lot of the required code to compile is provided. You are only expected
to implement two functions.
*/
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(name, pos) {
        return _super.call(this, name, pos) || this;
    }
    Monster.prototype.moveMonster = function (p) {
        var bestMove = { x: 0, y: 0 };
        var moves = 5; // can only move 5 times per turn
        //TODO
        //Hint: the player inputed comes from the closestPlayer function in helpers.ts
        return bestMove;
    };
    return Monster;
}(Creature_1.Creature));
exports.Monster = Monster;
// To test your function, run:
// tsc index.ts
// node index.js
