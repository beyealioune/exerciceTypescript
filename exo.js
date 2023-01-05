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
var Animaux = /** @class */ (function () {
    function Animaux(pattes, couleur) {
        this.pattes = pattes;
        this.couleur = couleur;
    }
    return Animaux;
}());
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chat;
}(Animaux));
var chatChartreux = /** @class */ (function (_super) {
    __extends(chatChartreux, _super);
    function chatChartreux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return chatChartreux;
}(Chat));
var chatEuropeen = /** @class */ (function (_super) {
    __extends(chatEuropeen, _super);
    function chatEuropeen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return chatEuropeen;
}(Chat));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chien;
}(Animaux));
var Oiseaux = /** @class */ (function (_super) {
    __extends(Oiseaux, _super);
    function Oiseaux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oiseaux;
}(Animaux));
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poisson;
}(Animaux));
function photographier(animaux) {
    console.log("Quel belle photo");
}
function miauler(chat) {
    console.log("Miaou");
}
function aboyer(chien) {
    console.log("waf waf");
}
function voler(oiseaux) {
    console.log("je vole");
}
function nager(poisson) {
    console.log("je nage");
}
function caress(Animaux) {
    if (Animaux.pattes === 4) {
        console.log("bravo");
    }
    else {
        console.log("pas bravo");
    }
}
function nourrir(animaux) {
    if (animaux.couleur === "noire") {
        console.log('je te nouris');
    }
    else {
        console.log("je te nouris pas");
    }
    ;
}
var rex = new Chat(0, "rouge");
caress(rex);
// class Chat extends Animaux {
// }
