# Arrays

An array is a List containing several items of the same kind. 


## Declaring Arrays
It is declared using ```[``` and ```]```.

```
//Array containing "Hello" and "World"
val stringArray = ["Hello", "World"] as string[];

//Array containing 1-3
val intArray = [1,2,3] as int[];
```

If you now think "wait, haven't I seen these brackets before?", you have.
Remember ```recipes.add(out,[[],[],[]]);```?
This uses three arrays with each containing up to three entries to define a crafting table recipe.

## Casting Arrays
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask?
This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](Import) the corresponding package and be sure to do so at the TOP of the script:  
```
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Nested Arrays
You can place Arrays in Arrays.

```
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## Reffering to items in an Array
You can refer to an element within an array by using it's place in the list.
The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

```
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


# Loops
A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For Loop
The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.

```
val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>];
val JArray = [<minecraft:grass>,<minecraft:wood>,<minecraft:gold_ingot>];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
	//defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
	//Just use this variable now!
	recipes.remove(item);
}

for i, item in IArray {
	//defines the variavle "i" with each element Number of IArray (i.e. 0,1,2,...)
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
	//defines the varaible "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
	recipes.remove(item);
}
```