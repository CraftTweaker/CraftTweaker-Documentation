# Arrays

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthält.

## Ein Array erstellen

Ein Array wird mithilfe von eckigen Klammern erstellt, also mit ```[``` und ```]```.

**Wichtig**: Du *musst* Arrays zu etwas initialisieren, sogar wenn sie leer sind.

`var floatArray as float [];` wird keine Syntax Fehler geben, aber sobald du dein Spiel neu lädst wirst du einen Fehler bekommen und dein Skript wird nicht funktionieren.

Initialsiere Arrays stattdessen so `var floatArray als float [] = [];`

```zenscript
//Ein Array mit "Hello" und "World"
val stringArray = ["Hello", "World"] as string[];

//Array mit den Zahlen 1-3
val intArray = [1,2,3] as int[];
```

Wenn du nun denkst "warte hab ich diese Klammern schon mal gesehen?", das hast du. Merke ```recipes.add(ergebins,[[],[],[]]);```? Dies nutzt drei Arrays mit jeweils bis zu drei Einträgen, um ein Crafting Rezept zu definieren.

## Arrays casten

Vielleicht hast du gemerkt, dass hinter den Arrays oben immer ein `as` stand.  
Warum? Das wird benötigt, da ZenScript manchmal nicht vorhersagen kann, von welchem Typ die Objekte im Array sind. Dies kann die Ursache für seltsame Konvertierungsfehler sein!  
Gehe auf Nummer sicher und weise den Arrays die richtigen Typen zu!  
Wenn Sie auf nicht-primitive Typen casten (alles außer Strings, ints und dergleichen), stellen Sie sicher, dass Sie das entsprechende Paket am ANFANG Ihres Skripts [importieren](/AdvancedFunctions/Import/):

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Verschachtelte Arrays

Du kannst Arrays in Arrays packen.

```zenscript
val stringArray1 = ["Hallo","Welt"] as string[];
val stringArray2 = ["ich","bin"] as string[];
val stringArray3 = ["ein","schöner"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
```

## Auf Elemente innerhalb eines Arrays zugreifen

Sie können auf ein Element innerhalb eines Arrays zugreifen, indem Sie dessen Platz in der Liste verwenden. Das erste Element hat den Index 0, das zweite den Index 1 und so weiter.

Wenn Sie auf ein Element in einem verschachtelten Array verweisen möchten, benötigen Sie zwei oder mehr Verweise, da jeder Verweis eine Ebene der Listen entfernt.

```zenscript
/*
stringArray[0] ist "Hallo"
stringArray[1] ist "Welt"
stringArray[2] ist "ich"
stringArray[3] ist "bin"
*/
val stringArray = ["Hallo","Welt","ich","bin"] as string[];

//gibt "Hallo" aus
print(stringArray[0]);


//Verschachtelte Arrays
val stringArray1 = ["Hallo","Welt"] as string[];
val stringArray2 = ["ich","bin"] as string[];
val stringArray3 = ["ein","schöner"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];

/*
stringArrayAll[0] ist ["Hallo","Welt"]
stringArrayAll[1] ist ["ich","bin"]
stringArrayAll[2] ist ["ein","schöner"]
stringArrayAll[3] ist ["Schmetterling","!"]

stringArrayAll[0][0] ist "Hallo"
stringArrayAll[0][1] ist "Welt"
usw.
*/

//gibt "Welt" aus
print(stringArrayAll[0][1]);
```

# Schleifen

Eine Schleife ist eine Funktion, die sich selbst wiederholt. Du kannst Schleifen verwenden, um eine Aktion auf alle Elemente in einem Array anzuwenden.

## For-Schleifen

Die For-Schleife wird meistens dazu verwendet, um durch alle Elemente eines Arrays zu iterieren. Iterieren bedeutet, eine Aktion für alle Elemente eines Arrays durchzuführen.  
Sie können das Schlüsselwort `break` verwenden, um die Schleife vorzeitig zu beenden.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
    //definiert die Variable "item" nacheinander mit jedem Element aus IArray (z.B. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Man kann diese Variable nun problemlos verwenden!
    //Erstellt Craftingrezepte für IArray aus den Items aus JArray und KArray (z.B. Dirt aus Gras und einer Holzaxt, Holzplanken aus Holz und einer Goldschaufel, Diamanten aus Eisenbarren und Smaragden)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //definiert "i" mit jeder Nummer von 0 bis 9 (z.B. 0,1,2,...,8,9)
    print(i);
}

for i in 10 ..

    recipes.remove(item);
}

for i, item in IArray {
    //definiert "i" mit jeder Elementenummer von IArray (z.B. 0,1,2,...)
    //definiert "item" mit jedem Element von IArray (z.B. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Man kann diese Variablen nun problemlos verwenden! 20 {
    //definiert "i" mit jeder Nummer von 10 bis 19 (z.B. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //definiert "item" mit jedem Item, welches von der Mod mit der Mod-ID "minecraft" stammt und löscht das Craftingrezept
    recipes.remove(item);
}
```

## While-Schleife

Die while-Schleife wird so lange ausgeführt, bis die gegebene Bedingung nicht mehr `true` (wahr) ist.  
Alternativ kannst du die while-Schleife auch mit dem Schlüsselwort `break` vorzeitig beenden.

```zenscript
var i = 0; 

//Wird die Ziffern 0 - 9 ausgeben, denn in der folgenden Iteration ist i < 10 falsch, da i den Wert 10 besitzt.
while i < 10 {
    print(i); 
    i += 1;
} 

print("Nach der Schleife: " + i);


//Wird die Zahlen 10 - 6 ausgeben, da in der folgenden Iteration i == 5 ist und abgebrochen wird.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("Nach der zweiten Schleife: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Elemente in ein Array hinzufügen

Auch wenn es nicht empfehlenswert ist, kann man nachträglich Elemente an ein Array anhängen.  
Man kann nur einzelne Elemente an ein Array anhängen, zwei Arrays addieren ist nicht möglich.  
Dazu kannst du den Operator `+` verwenden:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```