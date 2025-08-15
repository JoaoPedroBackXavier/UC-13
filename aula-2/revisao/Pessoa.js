"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
var pessoa = /** @class */ (function () {
    function pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(pessoa.prototype, "$name", {
        /**
         * Getter $name
         * @return {string}
         */
        get: function () {
            return this.name;
        },
        /**
         * Setter $name
         * @param {string} value
         */
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(pessoa.prototype, "$age", {
        /**
         * Getter $age
         * @return {number}
         */
        get: function () {
            return this.age;
        },
        /**
         * Setter $age
         * @param {number} value
         */
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    return pessoa;
}());
exports.pessoa = pessoa;
