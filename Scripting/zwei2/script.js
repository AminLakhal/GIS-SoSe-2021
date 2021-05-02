"use strict";
var Aufgabe1a;
(function (Aufgabe1a) {
    function min(..._zahlen) {
        // let x: number = Math.min(_zahlen);
        let minvalue = _zahlen[0];
        for (let i = 0; i < _zahlen.length; i++) {
            if (_zahlen[i] < minvalue) {
                minvalue = _zahlen[i];
            }
        }
        console.log(minvalue);
        return minvalue;
    }
    min(1, 50, 75, 236, 14, 5, 7, 83, 3478, 213, 2);
})(Aufgabe1a || (Aufgabe1a = {}));
var Aufgabe1b;
(function (Aufgabe1b) {
    debugger;
    function isEven(_n) {
        if (_n == 0) {
            console.log("true");
            return true;
        }
        else if (_n == 1) {
            console.log("false");
            return false;
        }
        else {
            return isEven(_n - 2);
        }
    }
    isEven(-1);
    /*

    50 = true
    75 = false
    -1 "Maximum call stack size exceeded" weil die funktion sich immer wieder selbst aufruft da n nicht 0 oder 1 werden kann */
})(Aufgabe1b || (Aufgabe1b = {}));
//# sourceMappingURL=script.js.map