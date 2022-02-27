### Associative Arrays

An Associative Array, sometimes called a Map, is a type of Object similar to an Array that stores objects behind another object, which acts as a key.
Associative Arrays are sometimes also called Maps or Dictionaries because of their similarity with those. A dictionary consists of entries, and each entry consists of a word that has a text attached to it.

If this helps you, Arrays only store a single type of values, so they have no need for keys. You access an individual value in an array using the index of the value, represented by an integer. A key in an Associative Array can be any kind of object, a String, an IItemStack, anything you'd like.

## Arrays in a Script

Arrays are declared using a structure that looks like this:

```zencode
val associativeArray as valuetype[keytype] = {
    key1 : value1,
    key2 : value2,
    key3 : value3
};
```
Time to analyse this in depth.

`val associativeArray = ` : This is standard variable declaration. We use `val` because we don't want our value to change.

`as valuetype[keytpe]` : Casts the array to it's type. This is required or else CraftTweaker will throw an error. The required types depend on what keys and values you assign to your array. Make sure to import the types too or casting will fail.

`{` : Associative Arrays, as opposed to regular Arrays, use curly braces to wrap their contents. This tells ZenCode that this is in fact an Associative Array.

`key1 : value1` : This maps a key to the value. Accessing the array with that key will return the value.

`,` : Commas are required while there is still another member to map.

`}` : Signals the end of the Associative Array.

`;` : Signals the end of the expression or line.

## Accessing a value from a Map

Getting a value from an Associative Array is done in a similar fashion to how you would access a member in an array. However, instead of the position, you need to pass in a variable that is of the same type as the map's key type. Accessing a map with a key that isn't mapped will return a `null` object.

```zencode
val dirt = <item:minecraft:dirt>;
val assocArray = {
	<item:minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<item:minecraft:dirt>]);

//You can also use variables here, as long as the variable is of the correct type
print(assocArray[dirt]);
```

You can also directly set the value of something in an Associative Array by using a setter on the accessed value:

```zencode
val changingArray = {
	<item:minecraft:dirt> : "this is me",
	<item:minecraft:gold_ingot> : "and I hate it"
} as string[IItemStack];

val gg = <minecraft:gold>;

//Overrides the value of gold_ingot
changingArray[gg] = "and I love it";

//adds a new entry
changingArray[<item:minecraft:grass>] = "Power!";
```

## Looping over an Associative Array

Looping over an Associative Array is similar to looping over a regular array, but since in this case we have an extra object, which is a key, we need to include that in our loop declaration:

```zencode
for key, value in associativeArray {
//loop body
}
```

## Example 

This is a script that creates an Associative Array that maps vanilla logs to their planks, and remakes the crafting table shapeless recipes to output 2 planks instead of the default 4.

```zencode
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;

//Makes a map that links each log to each plank

val log_plank_map as IItemStack[IIngredient] = {
  <item:minecraft:oak_log>: <item:minecraft:oak_planks>,
  <item:minecraft:spruce_log>: <item:minecraft:spruce_planks>,
  <item:minecraft:birch_log>: <item:minecraft:birch_planks>,
  <item:minecraft:jungle_log>: <item:minecraft:jungle_planks>,
  <item:minecraft:acacia_log>: <item:minecraft:acacia_planks>,
  <item:minecraft:dark_oak_log>: <item:minecraft:dark_oak_planks>,
  //You can expand this with modded logs and planks
};

//loops over left and right part of the map, which are the keys and values

for log, plank in log_plank_map {
    //removes the plank recipes in the crafting table.
   craftingTable.remove(plank);
   //Description
   println("Remaking logs and planks to half the original output");
   //Remakes the recipe with the conditions we want (in this case, you get a 2:1 plank to log ratio)
   craftingTable.addShapeless("log_to_planks_" + plank.registryName, plank * 2, [log]);
}
```

Frequent examples of Associative Arrays also include mapping raw ores to arrays of chanced results, that are used to setup crushing recipes, or map dye sources to actual dyes. What you end up doing with them is up to you, really. Just keep in mind that sometimes, it might be better to use a simple array or a function, rather than a map.