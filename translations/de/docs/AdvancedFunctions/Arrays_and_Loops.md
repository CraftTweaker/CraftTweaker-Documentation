# Arrays

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthalten.

## Ein Array erstellen

Ein Array wird mithilfe von eckigen Klammern erstellt, also mit ```[``` und ```]```.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` won't give syntax errors, but upon reloading your game, you will get an error and your script won't work.

Instead, initialize empty arrays like this `var floatArray as float [] = [];`

```zenscript
//Ein Array mit "Hello" und "World"
val stringArray = ["Hello", "World"] as string[];

//Array mit den Zahlen 1-3
val intArray = [1,2,3] as int[];
```

If you now think "wait, haven't I seen these brackets before?", you have. Remember ```recipes.add(out,[[],[],[]]);```? This uses three arrays with each containing up to three entries to define a crafting table recipe.

## Arrays casten

You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Verschachtelte Arrays

You can place Arrays in Arrays.

```zenscript
val stringArray1 = ["Hallo","Welt"] as string[];
val stringArray2 = ["ich","bin"] as string[];
val stringArray3 = ["ein","schöner"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
```

## Auf Elemente innerhalb eines Arrays zugreifen

You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For-Schleifen

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
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
    recipes.remove(item);
}

for i, item in IArray {
    //definiert "i" mit jeder Elementenummer von IArray (z.B. 0,1,2,...)
    //definiert "item" mit jedem Element von IArray (z.B. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Man kann diese Variablen nun problemlos verwenden!

    //Erstellt Craftingrezepte für IArray aus den Items aus JArray und KArray (z.B. Dirt aus Gras und einer Holzaxt, Holzplanken aus Holz und einer Goldschaufel, Diamanten aus Eisenbarren und Smaragden)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //definiert "i" mit jeder Nummer von 0 bis 9 (z.B. 0,1,2,...,8,9)
    print(i);
}

for i in 10 .. 20 {
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