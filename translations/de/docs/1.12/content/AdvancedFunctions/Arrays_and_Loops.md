# Arrays

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthält.


## Ein Array erstellen
It is declared using `[` and `]`.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` wird keine Syntax Fehler geben, aber sobald du dein Spiel neu lädst wirst du einen Fehler bekommen und dein Skript wird nicht funktionieren.

Initialsiere Arrays stattdessen so `var floatArray als float [] = [];`

```zenscript
//Ein Array mit "Hello" und "World"
val stringArray = ["Hello", "World"] as string[];

//Array mit den Zahlen 1-3
val intArray = [1,2,3] as int[];
```

Wenn du nun denkst "warte hab ich diese Klammern schon mal gesehen?", das hast du. Remember `recipes.add(out,[[],[],[]]);`? Dies nutzt drei Arrays mit jeweils bis zu drei Einträgen, um ein Crafting Rezept zu definieren.

## Arrays casten
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? Das wird benötigt, da ZenScript manchmal nicht vorhersagen kann, von welchem Typ die Objekte im Array sind. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:
```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Verschachtelte Arrays
Du kannst Arrays in Arrays packen.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## Auf Elemente innerhalb eines Arrays zugreifen
Sie können auf ein Element innerhalb eines Arrays zugreifen, indem Sie dessen Platz in der Liste verwenden. The first item in an Array is No. 0, the 2nd No.1 and so on.

Wenn Sie auf ein Element in einem verschachtelten Array verweisen möchten, benötigen Sie zwei oder mehr Verweise, da jeder Verweis eine Ebene der Listen entfernt.

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//prints "Hello"
print(stringArray[0]);


//Nested Arrays
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I","am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","!"]

stringArrayAll[0][0] is "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//prints "World"
print(stringArrayAll[0][1]);
```


# Schleifen
Eine Schleife ist eine Funktion, die sich selbst wiederholt. Du kannst Schleifen verwenden, um eine Aktion auf alle Elemente in einem Array anzuwenden.

## For-Schleifen
Die For-Schleife wird meistens dazu verwendet, um durch alle Elemente eines Arrays zu iterieren. Iterating means doing an action to all elements of an array.  
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
    //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use these variables now!

    //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
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
