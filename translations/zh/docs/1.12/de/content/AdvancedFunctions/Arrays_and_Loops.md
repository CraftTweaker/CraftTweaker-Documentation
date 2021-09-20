# 数组（Arrays）

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthalten.

## Ein Array erstellen

Ein Array wird mithilfe von eckigen Klammern erstellt, also mit `[` und `]`.

**Wichtig**: Du *musst* Arrays zu etwas initialisieren, sogar wenn sie leer sind.

`var floatArray as float [];` wird keine Syntax Fehler geben, aber sobald du dein Spiel neu lädst wirst du einen Fehler bekommen und dein Skript wird nicht funktionieren.

Initialsiere Arrays stattdessen so `var floatArray als float [] = [];`

```zenscript
//Ein Array mit "Hello" und "World"
val stringArray = ["Hello", "World"] as string[];

//Array mit den Zahlen 1-3
val intArray = [1,2,3] as int[];
```

Wenn du nun denkst "warte hab ich diese Klammern schon mal gesehen?", das hast du. Merke `recipes.add(ergebins,[[],[],[]]);`? Dies nutzt drei Arrays mit jeweils bis zu drei Einträgen, um ein Crafting Rezept zu definieren.

## Arrays casten

Vielleicht hast du gemerkt, dass hinter den Arrays oben immer ein `as` stand.  
Warum? Das wird benötigt, da ZenScript manchmal nicht vorhersagen kann, von welchem Typ die Objekte im Array sind. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Verschachtelte Arrays

数组中可以嵌套数组。

```zenscript
val stringArray1 = ["Hallo","Welt"] as string[];
val stringArray2 = ["ich","bin"] as string[];
val stringArray3 = ["ein","schöner"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
```

## Auf Elemente innerhalb eines Arrays zugreifen

你可以通过一个项在数组中的位置引用这个项。 The first item in an Array is No. 0, the 2nd No.1 and so on.

如果要引用嵌套数组中的项，则需要两个或多个序数表示它的位置，因为每个序数仅指代一个数组中的项。

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

循环是一个重复自身的函数。 它用于将操作应用于数组中的所有元素

## For-Schleifen

For 循环的主要用途是遍历数组中的每一个项。 Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

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

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

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

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```