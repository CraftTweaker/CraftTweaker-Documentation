# Bedingte Anweisungen

Manche Codezeilen sollten nur ausgeführt werden, wenn bestimmte Kriterien erfüllt werden (oder auch nicht). Für sowas gibt es bedingte Anweisungen.

## If (Wenn)

Eine bedingte Anweisung beginnt immer mit einer If-Abfrage. Sie prüft, ob das gegebene Statement wahr (true) ist und führt ggf. den folgenden Code in der Klammer aus. **Sei vorsichtig, du brauchst zwei EQUALS um Werte zu vergleichen! (Das liegt daran, dass eine Stufe für die Deklaration von Werten ist!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test ist Null!");
}
```

## Else (Ansonsten)

Ein Else-Statement kann an eine If-Abfrage angehängt werden und wird ausgeführt, falls die Abfrage nicht true (false) ergibt.

```zenscript
var test = 0;

if (test == 0) { //true
    //wird ausgeführt, wenn der Test gleich 0
    print("Test ist Null! );
} else {
    //wird ausgeführt, wenn der Test nicht 0
    print("Test ist NICHT Null! );
}

test = 1;
if (test == 0) { //false
    //wird ausgeführt, wenn Test gleich 0
    ist ("Jetzt, test ist null! );
} else {
    //wird ausgeführt, wenn Test nicht gleich 0
    ist ("Jetzt, test ist NICHT Null! );
}

```

## Dinge, die man überprüfen kann

Berechnungen: `+`,`-`,`*`,`/`,`mod`,`verkettung(~)`

Unterstützte Operationen sind `Logical OR(||)`, `Logical AND(&&)`, `Bitweise OR(|)`, `Bitweise UND(&)`und `Bitweise XOR(^)`

```zenscript
//Sie können nachfragen:


//Zahlenwerte
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Berechnete Zahlenwerte
val b = 1;
val c = 5;
//Alle evaluieren zu true
if (b+c == 6) { print("Num1! ); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0. ) { print("Num3! ); }

//OR, XOR, AND
val d = "Hallo";
val e = "Welt";
val f = d~e; //f = "HelloWorld", die Tilde verkettet nur eine Sache an die andere

//|(OR) bedeutet solange eines der Kriterien erfüllt ist, wertet es auf true
if (d == "Hallo" || e == "Hallo") { print("OR1! ); } //true
if (d == "Hallo" || e == "World") { print("OR2! ); } //true

//^(XOR) bedeutet, dass NUR ONE Kriterien erfüllt werden können sonst wertet es auf false
if (d == "Hallo" ^ e == "Hallo") { print("XOR1! ); } //true
if (d == "Hallo" ^ e == "World") { print("XOR2! ); } //false

//&&(AND) bedeutet, beide Kriterien müssen erfüllt sein ansonsten wertet es auf false
if (d == "Hallo" && e == "Hallo") { print("AND1! ); } //false
if (d == "Hallo" && e == "World") { print("AND2! ); } //true
```

## Der ? Operator

Die ganze Zeit überall If/Else schreiben zu müssen kann schnell nervig werden. Besonders wenn du nur kleinere entweder/oder-Bedingungen benötigst. Für solche Fälle wurde der `?`-Operator implementiert. Er funktioniert genau wie ein If/Else-Statement, für welches man weniger Code benötigt. Syntax: `boolean ? if : else`

```zenscript
val switchy = false;

//gibt den Status aus
print("Switchy is " ~ switchy);

//wenn switchy true ergibt, vInt = 1, ansonsten vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Gibt "Hallo" aus, wenn switchy true ist, ansonsten "Tschüss"
print(switchy ? print("Tschüss") : print("Hallo"); "Hallo" : "Tschüss");

//Gibt "Tschüss" aus, wenn switchy true ergibt, ansonsten "Hallo"
switchy ?

```

## Operatoren

Du kannst folgende Operatoren verwenden. Alle gegebenen Beispiele ergeben true.

| Name                | Zeichen      | Erklärung                                                                                                                                                                           | Beispiel          |
| ------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Nicht               | `!`          | Invertiert ein Boolean (true/false)                                                                                                                                                 | !false            |
| Nicht gleich        | `!=`         | Prüft, ob der Wert davor und danach nicht gleich ist                                                                                                                                | 1 != 2            |
| Gleich              | `==`         | Prüft, ob der Wert davor und danach gleich ist                                                                                                                                      | 1 == 1            |
| Größer als          | `>`       | Prüft, ob der Wert davor größer ist als der Wert danach                                                                                                                             | 2 > 1             |
| Größer oder gleich  | `>=`      | Prüft, ob der Wert davor größer oder gleich groß wie der Wert danach ist                                                                                                            | 1 >= 1            |
| Weniger als         | `<`       | Prüft, ob der Wert davor kleiner ist als der Wert danach                                                                                                                            | 1 < 2             |
| Kleiner oder gleich | `<=`      | Prüft, ob der Wert davor kleiner oder gleich klein wie der Wert danach ist                                                                                                          | 1 <= 1            |
| Logisch UND         | `&&` | Prüft, ob sowohl vor als auch nach den Werten wahr sind, falsch, wenn eine oder beide falsch sind                                                                                   | wahr && true      |
| Logisch ODER        | `\|\|`     | Prüft, ob der Wert vor oder nach wahr ist, falsch, wenn keiner wahr ist                                                                                                             | false \|\| true |
| Bitwise XOR         | `^`          | Prüft, ob genau einer der Vor- oder Nach-Werte wahr ist, ob beide oder keine wahr sind                                                                                              | true ^ false      |
| Bitweise UND        | `&`      | Führt eine bitweise UND Operation an den Vor- und Nach-Werten aus. Siehe [dieses](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) für mehr  | wahr && true      |
| Bitweise ODER       | `\|`        | Führt eine bitweise ODER Operation an den Vor- und Nach-Werten aus. Siehe [dieses](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) für mehr | false \|\| true |

### Unterschied zwischen `|` und `||` (und `&` und `&&`)

Der Hauptunterschied zwischen dem einzelnen und dem Doppelten, abgesehen von der Semantik, ist, dass das Doppelte eine Überprüfung nach jeder Bedingung durchführt und frühzeitig beendet wird - das nennt man Kurzschluss. Die Einzelne durchläuft jedoch die gesamte Kette von Bedingungen, auch wenn der erste den gesamten Zustand annulliert hätte. Dies spart nicht nur Ressourcen, sondern ermöglicht auch einfacheres Skripting wie **null prüft** und verkettete Bedingungen.

```zenscript
var a = 5;
var item = ... als IItemStack;

// Auch wenn 5 es geht immer noch durch alle Bedingungen aufgelistet
if (a == 5 | a == 3 | a == 10 | a == -1) {
...
}

// Auch wenn eine 5 ist und die Bedingung unmöglich ist (eine Variable kann nicht 3 und 5 sein), es geht immer noch durch alle aufgelisteten Bedingungen
if (a == 3 & a < 2 & a > 8 & a == 5) {
... 
}

// Prüft, ob das Element nicht null ist, bevor es auf Variablen von Element
if (!isNull(item) && item.amount == 1) {
...
}

// Prüft, ob Artikel nicht null ist, während auf Variablen von einem potentiell null Element zugegriffen wird, Werfe einen Fehler, wenn das Element null
if (! sNull(item) & item. mount == 1) {
...
}
```

## Der in/has-Operator

Der `in` und der `hat` Operator überprüft, ob etwas drin ist.  
Zuerst benötigen Sie die Liste, in der Sie einchecken möchten dann hat der `in`/`` dann den Wert, auf den Sie überprüfen möchten. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/hat geladene Mods

Du kannst überprüfen, ob ein Mod geladen wird, indem du überprüfst, ob es in der LoadedMods Liste ist

```zenscript
//enthält Prüfungen können in
verwendet werden, wenn (loadedMods in "mcp") {
    print("Minecraft Coder Pack geladen");
}

//Die meisten Leute bevorzugen die Verwendung hat
if (loadedMods hat "mcp") {
    print("Minecraft Coder Pack geladen");
}
```

### in/hat IIngredient

Sie können auch überprüfen, ob ein Artikel mit einer Definition übereinstimmt, indem Sie zwei IIngredients vergleichen.  
Mit diesem müssen Sie ein bisschen vorsichtig sein, um die beiden Einträge nicht zu verwechseln:  
Dies ist nur der Fall, wenn der IIngredient NACH `in` auch vollständig in dem einen VOR des `in`gefunden werden kann.  
In den meisten Fällen verwenden Sie das `Schlüsselwort stattdessen` , da die Absicht klarer ist und es genau dasselbe tut.

```zenscript
// Prüft, ob sich der Eisenbarren in der OreDict "ingotIron"
befindet, ob (<ore:ingotIron> in <minecraft:iron_ingot>) {
    Drucken ("Eisenbarren sind in der rechten OreDict");
}

// Bevorzugt, die gleiche Funktion wie vorherige
wenn (<ore:ingotIron> hat <minecraft:iron_ingot>) { 
    Drucken ("Eisenbarren sind in der rechten OreDict");
}
```

This is only true when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts. dd(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, und Rotstein besteht nur aus Rotstein.
if (redstone hat allDusts) {

}
```