function a1(): void {
    // Variable x soll ein String sein der "Alles" lautet, dem x kann ein Zahle folgen bsp. x1 die variable kann auch groß geschrieben sein bsp: X, 
    // die Variable kann keine Zahl sein
    let x: string = "Alles";
    let y: string = "Klar?";
    debugger;
    func2();
    console.log(x);
    //gibt Variable x aus
    func1();
    console.log(x, y);
    //func1 aufgerufen und ausgeführt
    console.log("Logo!");
    //String logo ausgegeben
    function func1(): void{
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


function func2(): void {
    // void kein return
    console.log("Alles Gute!");
}



//Aufgabe 2

function a2(): void {
    let i: number = 9;
    // i soll den Wert 9 haben

    do {
        console.log(i);
        // i Ausgeben
        i = i - 1;
        // ineu soll i-1 sein
    } while( i > 0);
    // solange i größer als null ist
}

a2();


// Aufgabe 4

/*Annahme 
Hallo
Bla
Hallo
Blubb
Test
Hallo 
*/

let x: string = "Hallo";
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

function func3(y: string): void{
    y = "Bla";
    console.log(y);
}

function func4(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func5(): void{
    x = "Test";
}

/* 
    Lokale Variablen
    Globale Variablen
    Übergabeparameter
*/