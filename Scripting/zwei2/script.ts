namespace Aufgabe1a {
    function min(..._zahlen: number[]) {
        // let x: number = Math.min(_zahlen);
        let minvalue: number = _zahlen[0];
        for (let i: number = 0; i < _zahlen.length; i++) {
            if (_zahlen[i] < minvalue) {
                minvalue = _zahlen[i];
            }


        }
        console.log(minvalue);
        return minvalue;
    }
    min( 1, 50, 75, 236, 14, 5, 7, 83, 3478, 213, 2);
}



namespace Aufgabe1b {
    debugger;
    function isEven(_n: number): boolean {
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

}
namespace Aufgabe1c {

    interface Studenten {
        name: string;
        vorname: string;
        geburtsdatum: string;
        alter: number;
        matrikelnummer: number;
        studiengang: string:
        semester: number;
        email(mail: string): void;
    }



}