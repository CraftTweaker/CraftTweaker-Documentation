# Tablice

Tablica to lista zawierająca wiele przedmiotów jednego typu.


## Tworzenie Tablic
It is declared using `[` and `]`.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` won't give syntax errors, but upon reloading your game, you will get an error and your script won't work.

Instead, initialize empty arrays like this `var floatArray as float [] = [];`

```zenscript
//Tablica zawierająca "Hello" i "World"
val stringArray = ["Hello", "World"] as string[];

//Tablica zawierająca cyfry 1-3
val intArray = [1,2,3] as int[];
```

If you now think "wait, haven't I seen these brackets before?", you have. Remember `recipes.add(out,[[],[],[]]);`? This uses three arrays with each containing up to three entries to define a crafting table recipe.

## Oznaczanie Tablic
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:
```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Zagnieżdżone Tablice
You can place Arrays in Arrays.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## Odnoszenie się do zawartości tablicy
You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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


# Pętle
A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## Pętla For
The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//Dla [nazwaInteger, ] nazwaElementu w IArray {code}

for item in IArray {
    //definiuje zmienną "item" jako każdy element IArray (czyli <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Teraz po prostu użyj tej zmiennej!
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
    //definiuje zmienną "i" jako każdy numer od 10 do 19 (tj. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //definiuje zmienną "item" jako każdy przedmiot dodany przez modyfikacje z modID "minecraft" i usuwa jego receptury wytwarzania
    recipes.remove(item);
}
```

## Pętla While
The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//Wydrukuje 0 - 9, ponieważ iteracje dalej i < 10 będzie fałszem, iż i będzie równe 10.
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//Wydrukuje 10 - 6, ponieważ iterację dalej i == 5 przez co pętla wykona polecenie break.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("After loop 2: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Dodawanie zmiennych do tablic

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
