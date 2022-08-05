"use strict";
exports.__esModule = true;
exports.Creature = void 0;
var Creature = /** @class */ (function () {
    function Creature(name, pos) {
        this.position = { x: 0, y: 0 };
        this.position = pos;
        this.name = name;
    }
    Creature.prototype.getPosition = function () {
        return this.position;
    };
    Creature.prototype.getName = function () {
        return this.name;
    };
    return Creature;
}());
exports.Creature = Creature;
