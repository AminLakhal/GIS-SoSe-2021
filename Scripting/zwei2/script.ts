debugger;
namespace Aufgabe1a {
    function min(..._zahlen: number[]) {
        // let x: number = Math.min(_zahlen);
        let minvalue: number = _zahlen[0];
        for (let i: number = 0; i < _zahlen.length; i++) { //
            if (_zahlen[i] < minvalue) {
                minvalue = _zahlen[i];
            }


        }
        console.log(minvalue);
        return minvalue;
    }
    min(1, 50, 75, 236, 14, 5, 7, 83, 3478, 213, 2);
}



namespace Aufgabe1b {
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
    isEven(50);
    /*

    50 = true
    75 = false
    -1 "Maximum call stack size exceeded" weil die funktion sich immer wieder selbst aufruft da n nicht 0 oder 1 werden kann, man könnte es lösen im dem man den fall abfängt sodass _n nicht -1 werden kann */

}
namespace Aufgabe1c {

    interface Student {
        name: string;
        vorname: string;
        alter: number;
        mNummer: number;
        sGang: string;
        semester: number;

    }

    let s1: Student = { name: "Doe", vorname: "Jane", alter: 22, mNummer: 123456, sGang: "Mib", semester: 2 };
    let s2: Student = { name: "Doe", vorname: "John", alter: 21, mNummer: 654321, sGang: "Mkb", semester: 1 };
    let s3: Student = { name: "Gudien", vorname: "Stang", alter: 23, mNummer: 321654, sGang: "Omb", semester: 4 };
    /*console.log(s1.alter);
    console.log(s2.name);
    console.log(s3.name);*/

    let studenten: Student[] = [s1, s2, s3, { name: "Dane", vorname: "Joe", alter: 20, mNummer: 654123, sGang: "Mib", semester: 2 }];
    console.log(studenten[0].sGang, studenten[2].name, studenten[3].alter);

    function showInfo(_info: Student) {
        console.log(_info.vorname, _info.name, _info.sGang, _info.semester);
    }
    showInfo(s1);


    class newStudent {
        name: string;
        vorname: string;
        alter: number;
        mNummer: number;
        sGang: string;
        semester: number;

        constructor(_vorname: string, _name: string, _sGang: string, _semester: number, _alter: number, _mNummer: number) {

            this.name = _name;
            this.vorname = _vorname;
            this.alter = _alter;
            this.mNummer = _mNummer;
            this.sGang = _sGang;
            this.semester = _semester;
        }

        showInfo(): void {
            console.log(this.vorname, this.name, this.sGang, this.semester, this.alter, this.mNummer);
        }
    }

    let s: newStudent = new newStudent("Jane", "Doe", "Mib", 4, 22, 123123);
    s.showInfo();

}

namespace Aufgabe2a {

    function backwards(..._array: number[]) {
        for (let i: number = _array.length - 1; i >= 0; i--) {
            console.log(_array[i]);
        }

    }
    backwards(5, 42, 17, 2018, -10, 60, -10010);
}

namespace Aufgabe2b {
    /*
        let array1: string[] = ["apfel", "birne", "zitrone"];
        let array2: number[] = [1, 2, 3];
    
        let mergedArray = [...array1, ...array2];
    
        console.log(mergedArray);
    */

    function multArray(): void {
        let mult: number[][] = [[1, 2, 3], [10, 20, 30], [123, 666, -911], [15, 9001, -440, 1024]];
        let newArray: number[] = [mult.length];
        //newArray.push(...mult);
        for (let i: number = 0; i < mult.length; i++) {
            for (let j: number = 0; j < mult[i].length; j++) {
                newArray.length++;
                newArray = [(mult[i][j])];
                console.log(newArray);
            }

        }

    }
    multArray();
}


namespace Aufgabe2c {

    let newArray: number[] = [];

    function split(_array: number[], _index1: number, _index2: number) {

        for (let i: number = _index1; i <= _index2; i++) {
            newArray.push(_array[i]);
            console.log(_array[i]);
        }
        
        return split;


    }
    split([5, 42, 17, 2018, -10, 60, -10010], 2, 4);


}

namespace Aufgabe3 {


}