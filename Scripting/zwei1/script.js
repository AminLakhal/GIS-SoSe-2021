"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    function a1() {
        // Variable x soll ein Typ String sein der "Alles" lautet, dem x kann ein Zahl folgen bsp. x1 die variable kann auch groß geschrieben sein bsp: X, 
        // die Variable kann nicht mit einer Zahl beginnen, kein Leerzeichen oder Bindestrich enthalten
        let x = "Alles";
        let y = "Klar?";
        debugger;
        func2();
        console.log(x);
        //gibt Variable x aus
        func1();
        console.log(x, y);
        //func1 aufgerufen und ausgeführt
        console.log("Logo!");
        //String logo ausgegeben
        function func1() {
            y = "Klar?";
        }
    }
    a1();
    /*
    function func1(): void {
        // void kein return
       console.log("Klar?");
    }
    
    
    function func1(): void{
        x = "Klar?";
    }
    */
    function func2() {
        // void kein return
        console.log("Alles Gute!");
    }
})(Aufgabe1 || (Aufgabe1 = {}));
var Aufgabe2;
(function (Aufgabe2) {
    //Aufgabe 2
    function a2() {
        let i = 9;
        // i soll den Wert 9 haben
        do {
            console.log(i);
            // i Ausgeben
            i = i - 1;
            // ineu soll i-1 sein
        } while (i > 0);
        // solange i größer als null ist
    }
    a2();
})(Aufgabe2 || (Aufgabe2 = {}));
var Aufgabe4;
(function (Aufgabe4) {
    // Aufgabe 4
    /*Annahme
    Hallo
    Bla
    Hallo
    Blubb
    Test
    Hallo
    */
    let x = "Hallo";
    // x deklariert
    console.log(x);
    // x wird ausgegeben
    func3(x);
    // bla wird ausgegeben und der funktion wird der wert von x mitgegeben ich verstehe aber nicht wieso
    console.log(x);
    // Hallo wird ausgegeben
    func4();
    // Blubb
    func5();
    // der x wert wird auf Test geändert
    console.log(x);
    // Test wird ausgegeben
    function func3(y) {
        y = "Bla";
        console.log(y);
    }
    function func4() {
        let x = "Blubb";
        console.log(x);
    }
    function func5() {
        x = "Test";
    }
    /*
        Lokale Variablen sind nur innerhalb ihres Blockes sichtbar, Funktionen Schleifen usw.
    
        Globale Variablen sind überall sichtbar außerhalb der {} Klammern, lokale Variable kann Globale Variable temporär überschreiben aber beeinflusst diese nicht
    
        Übergabeparameter
        function func3(y: string) der Wert zwischen der Klammer ist der Übergabeparameter
    
        Fuktionen haben wie Variablen einen Namen und Typen und können auch überschrieben werden, aber Funktionen können erst nach ihrer Definition aufgerufen werden
    */
})(Aufgabe4 || (Aufgabe4 = {}));
var Aufgabe5a;
(function (Aufgabe5a) {
    function multi() {
        let _x = 7;
        let _y = 4;
        let _ergebnis = _x * _y;
        console.log(_ergebnis);
        return _ergebnis;
    }
    multi();
})(Aufgabe5a || (Aufgabe5a = {}));
var Aufgabe5b;
(function (Aufgabe5b) {
    function max() {
        let _x = 7;
        let _y = 4;
        if (_x > _y) {
            console.log(_x);
        }
        else {
            console.log(_y);
        }
    }
    max();
})(Aufgabe5b || (Aufgabe5b = {}));
var Aufgabe5c;
(function (Aufgabe5c) {
    // hab überlesen das wir es per while schleife lösen sollten ergebnis falsch
    function count() {
        let _zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 556, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        let _summe = 0;
        for (let i = 0; i < _zahlen.length; i++) {
            _summe = _summe + _zahlen[i];
        }
        console.log(_summe);
    }
    count();
})(Aufgabe5c || (Aufgabe5c = {}));
var Aufgabe5c2;
(function (Aufgabe5c2) {
    function count() {
        let _i = 0;
        let _ergebnis = 0;
        while (_i < 100) {
            _i++;
            _ergebnis = _ergebnis + _i;
        }
        console.log(_ergebnis);
        return _ergebnis;
    }
    count();
})(Aufgabe5c2 || (Aufgabe5c2 = {}));
var Aufgabe5d;
(function (Aufgabe5d) {
    function random() {
        for (let _i = 0; _i < 10; _i++) {
            console.log(Math.floor(Math.random() * 100));
        }
    }
    random();
})(Aufgabe5d || (Aufgabe5d = {}));
var Aufgabe5e;
(function (Aufgabe5e) {
    function factorial(_n) {
        if (_n > 0 && _n <= 1) {
            return 1;
        }
        else {
            return _n * factorial(_n - 1);
        }
    }
    console.log(factorial(5));
})(Aufgabe5e || (Aufgabe5e = {}));
var Aufgabe5f;
(function (Aufgabe5f) {
    function leapyears() {
        fo;
    }
})(Aufgabe5f || (Aufgabe5f = {}));
var Aufgabe6a;
(function (Aufgabe6a) {
    function sieben() {
        let _n = 7;
        let _row = "";
        for (let _i = 0; _i < _n; _i++) {
            _row += "#";
            console.log(_row);
        }
    }
    sieben();
})(Aufgabe6a || (Aufgabe6a = {}));
//# sourceMappingURL=script.js.map