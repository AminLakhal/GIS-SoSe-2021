"use strict";
debugger;
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
    isEven(50);
    /*

    50 = true
    75 = false
    -1 "Maximum call stack size exceeded" weil die funktion sich immer wieder selbst aufruft da n nicht 0 oder 1 werden kann */
})(Aufgabe1b || (Aufgabe1b = {}));
var Aufgabe1c;
(function (Aufgabe1c) {
    let s1 = { name: "Doe", vorname: "Jane", alter: 22, mNummer: 123456, sGang: "Mib", semester: 2 };
    let s2 = { name: "Doe", vorname: "John", alter: 21, mNummer: 654321, sGang: "Mkb", semester: 1 };
    let s3 = { name: "Gudien", vorname: "Stang", alter: 23, mNummer: 321654, sGang: "Omb", semester: 4 };
    /*console.log(s1.alter);
    console.log(s2.name);
    console.log(s3.name);*/
    let studenten = [s1, s2, s3, { name: "Dane", vorname: "Joe", alter: 20, mNummer: 654123, sGang: "Mib", semester: 2 }];
    console.log(studenten[0].sGang, studenten[2].name, studenten[3].alter);
    function showInfo(_info) {
        console.log(_info.vorname, _info.name, _info.sGang, _info.semester);
    }
    showInfo(s1);
    class newStudent {
        constructor(_vorname, _name, _sGang, _semester, _alter, _mNummer) {
            this.name = _name;
            this.vorname = _vorname;
            this.alter = _alter;
            this.mNummer = _mNummer;
            this.sGang = _sGang;
            this.semester = _semester;
        }
        showInfo() {
            console.log(this.vorname, this.name, this.sGang, this.semester, this.alter, this.mNummer);
        }
    }
    let s = new newStudent("Jane", "Doe", "Mib", 4, 22, 123123);
    s.showInfo();
})(Aufgabe1c || (Aufgabe1c = {}));
var Aufgabe2a;
(function (Aufgabe2a) {
    function backwards(..._array) {
        for (let i = _array.length - 1; i >= 0; i--) {
            console.log(_array[i]);
        }
    }
    backwards(5, 42, 17, 2018, -10, 60, -10010);
})(Aufgabe2a || (Aufgabe2a = {}));
var Aufgabe2b;
(function (Aufgabe2b) {
    /*
        let array1: string[] = ["apfel", "birne", "zitrone"];
        let array2: number[] = [1, 2, 3];
    
        let mergedArray = [...array1, ...array2];
    
        console.log(mergedArray);
    */
    function multArray() {
        let mult = [[1, 2, 3], [10, 20, 30], [123, 666, -911], [15, 9001, -440, 1024]];
        let newArray = [mult.length];
        //newArray.push(...mult);
        for (let i = 0; i < mult.length; i++) {
            for (let j = 0; j < mult[i].length; j++) {
                newArray = [(mult[i][j])];
                console.log(newArray);
            }
        }
    }
    multArray();
})(Aufgabe2b || (Aufgabe2b = {}));
var Aufgabe2c;
(function (Aufgabe2c) {
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    function split(_index1, _index2) {
    }
    ;
})(Aufgabe2c || (Aufgabe2c = {}));
//# sourceMappingURL=script.js.map