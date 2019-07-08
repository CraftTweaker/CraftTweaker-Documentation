# Arrays

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthalten.

## Ein Array erstellen

Ein Array wird mithilfe von eckigen Klammern erstellt, also mit ```[``` und ```]```.

    //Ein Array mit "Hello" und "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //Array mit den Zahlen 1-3
    val intArray = [1,2,3] as int[];
    

Falls du dich jetzt wunderst, ob du diese Klammern schon einmal gesehen hast, das hast du. Erinnerst du dich an ```recipes.add(out,[[],[],[]]);```? Dies nutzt drei Arrays mit jeweils bis zu drei Einträgen, um ein Crafting Rezept zu definieren.

## Arrays casten

Vielleicht hast du gemerkt, dass hinter den Arrays oben immer ein `as` stand.  
Warum? Das wird benötigt, da ZenScript manchmal nicht vorhersagen kann, von welchem Typ die Items im Array sind. Das kann manchmal komische Fehler verursachen!  
Geh lieber den sicheren Weg und weise deinen Arrays die richtigen Typen zu!  
Darüber hinaus, wenn du zu nicht-primitiven Typen (also, alles außer strings, ints usw.) casten willst, denk dran, dass du die jeweiligen dazu passenden Pakete am Beginn des Skriptes importieren musst:

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## Verschachtelte Arrays

Man kann auch Arrays innerhalb Arrays platzieren.

    val stringArray1 = ["Hallo","Welt"] as string[];
    val stringArray2 = ["ich","bin"] as string[];
    val stringArray3 = ["ein","schöner"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
    

## Auf Elemente innerhalb eines Arrays zugreifen

Man greift auf die Elemente eines Arrays zu, in dem man den jeweiligen Platz des Elements in der Liste nimmt. Das erste Element eines Arrays ist die Nummer 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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
    

# Loops

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For Loop

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

    import crafttweaker.item.IItemStack;
    
    val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
    val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
    val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];
    
    
    //for [IntegerName, ] elementName in IArray {code}
    
    for item in IArray {
        //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Just use this variable now!
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
        //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
        print(i);
    }
    
    for item in loadedMods["minecraft"].items {
        //defines the variable "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
        recipes.remove(item);
    }
    

## While Loop

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

    var i = 0; 
    
    //Will print 0 - 9, because in the iteration after that, i < 10 is false since i is 10 then.
    while i < 10 {
        print(i); 
        i += 1;
    } 
    
    print("After loop: " + i);
    
    
    //Will print 10 - 6, because in the iteration after that i == 5 and it will break.
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
    

# Adding items to an Array

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```