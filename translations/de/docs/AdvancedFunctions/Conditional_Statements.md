# Bedingte Anweisungen

Manche Codezeilen sollten nur ausgeführt werden, wenn bestimmte Kriterien erfüllt werden (oder auch nicht). Für sowas gibt es bedingte Anweisungen.

## If (Wenn)

Eine bedingte Anweisung beginnt immer mit einer If-Abfrage. Sie prüft, ob das gegebene Statement wahr (true) ist und führt ggf. den folgenden Code in der Klammer aus. Aber Achtung: Man benötigt ZWEI Gleich-Zeichen, um Werte zu vergleichen!

```zenscript
val test = 0;

if(test == 0){ //true
    print("Test ist null!");
}
```

## Else (Ansonsten)

Ein Else-Statement kann an eine If-Abfrage angehängt werden und wird ausgeführt, falls die Abfrage nicht true (false) ergibt.

```zenscript
var test = 0;

if(test == 0){//true
    //wird ausgeführt, wenn test gleich 0
    print("Test ist null!");
} else {
    //wird ausgeführt, wenn test nicht gleich 0
    print("Test ist NICHT null!");
}

test = 1
if(test == 0){//false
    //wird ausgeführt, wenn test gleich 0
    print("Und nun, test ist null!");
} else {
    //wird ausgeführt, wenn test nicht gleich 0
    print("Und nun, test ist NICHT null!");
}

```

## Dinge, die man überprüfen kann

Berechnungen: `+`,`-`,`*`,`/`,`mod`,`verkettung(~)`

Operanden: `OR(|)`, `AND(&)`, `XOR(^)`

```zenscript
//Was man alles prüfen kann:


//Zahlen
val a = 0 as int;
if(a==0){print("NumVal");}

//Berechnete Zahlen
val b = 1;
val c = 5;
//Alles ergibt true
if(b+c==6){print("Num1!");}
if(b*c==5){print("Num2!");}
if(b/c==0.2){print("Num3!");}

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", die Tilde verkettet die beiden Zeicheketten

//|(OR) So lange eines der Kriterien stimmt, ergibt die Abfrage true
if(d=="Hello" | e == "Hello"){print("OR1!");}       //true
if(d=="Hello" | e == "World"){print("OR2!");}       //true

//^(XOR) Es darf nur genau ein Kriterium stimmen, ansonsten false
if(d=="Hello" ^ e == "Hello"){print("XOR1!");}      //true
if(d=="Hello" ^ e == "World"){print("XOR2!");}      //false

//&(AND) Es müssen beide Kriterien stimmen, ansonsten false
if(d=="Hello" & e == "Hello"){print("AND1!");}      //false
if(d=="Hello" & e == "World"){print("AND2!");}      //true
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
print(switchy ? "Hallo" : "Tschüss");

//Gibt "Tschüss" aus, wenn switchy true ergibt, ansonsten "Hallo"
switchy ? print("Tschüss") : print("Hallo");

```

## Operatoren

Du kannst folgende Operatoren verwenden. Alle gegebenen Beispiele ergeben true.

| Name                | Zeichen | Erklärung                                                                                                | Beispiel     |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------- | ------------ |
| Nicht               | `!`     | Invertiert ein Boolean (true/false)                                                                      | !false       |
| Nicht gleich        | `!=`    | Prüft, ob der Wert davor und danach nicht gleich ist                                                     | 1 != 2       |
| Gleich              | `==`    | Prüft, ob der Wert davor und danach gleich ist                                                           | 1 == 1       |
| Größer als          | `>`  | Prüft, ob der Wert davor größer ist als der Wert danach                                                  | 2 > 1        |
| Größer oder gleich  | `>=` | Prüft, ob der Wert davor größer oder gleich groß wie der Wert danach ist                                 | 1 >= 1       |
| Kleiner als         | `<`  | Prüft, ob der Wert davor kleiner ist als der Wert danach                                                 | 1 < 2        |
| Kleiner oder gleich | `<=` | Prüft, ob der Wert davor kleiner oder gleich klein wie der Wert danach ist                               | 1 <= 1       |
| AND (UND)           | `&` | Prüft, ob der Wert davor und danach gleich ist                                                           | true & true  |
| OR (ODER)           | `|`     | Prüft, ob mindestens einer der beiden Werte wahr ist. Ergibt true, wenn beide wahr sind                  | true | true  |
| XOR (Exklusiv-ODER) | `^`     | Prüft, ob genau einer der beiden Werte wahr ist. Wenn keiner oder beide Werte wahr sind, ergibt es false | true ^ false |

## Der in/has-Operator

Der `in` und `has`-Operator prüfen, ob etwan in etwas bestimmten ist.  
Dazu brauchst erst eine Liste, in welcher du prüfen willst, dann `in`/`has` und zu guter letzt der Wert, nach welchem du prüfen möchtest. `in` und `has` sind für ZenScript zwar das gleiche, allerdings wird `has` öfter verwendet, weil das eher zur englischen Grammatik passt.

### in/has loadedMods (Geladene Mods)

Eine Mod geladen ist, wenn sich diese in der Liste befindet:

```zenscript
if(loadedMods in "mcp"){
    print("Minecraft Coder Pack geladen");
}

//Die meisten nutzen diese Variante
if(loadedMods has "mcp"){
    print("Minecraft Coder Pack geladen");
}
```

### in/has IIngredient

Du kannst auch mit Hilfe von zwei IIngredients prüfen, ob ein Item einer bestimmten definition entspricht.  
In diesem Fall darfst du aber nicht die beiden Einträge verwechseln:  
Das hier ergibt nur true, wenn der Eintrag NACH `in` in der Gruppe VOR dem `in` zu finden ist.  
In den meisten Fällen sollte man also lieber das `has`-Schlüsselwort verwenden, weil das meistens einen viel klareren Eindruck macht.

```zenscript
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Eisenbarren befinden sich in der richtigen Gruppe");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Eisenbarren befinden sich in der richtigen Gruppe");
}
```

Es ergibt nur true, wenn alle passenden Items vom IIngredient NACH dem `has` auch im IIngredient VOR dem `has` zu finden sind. Angenommen, wir haben ein IIngredient, welches alle "Dusts" enthält (Redstone, Glowstone Dust...):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True, da Redstone ein Teil von allDusts ist
if(allDusts has redstone) {

}

//False, da allDusts aus Redstone und Glowstone Dust besteht, redstone allerdings nur aus Redstone.
if(redstone has allDusts) {

}
```