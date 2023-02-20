# WeightedOreDictEntry
A Weighted OreDict Entry is like a normal [IOreDictEntry](/Vanilla/OreDict/IOreEntry) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.oredict.WeightedOreDictEntry;`

## Implementing IWeightedIngredient
WeightedOreDictEntry implements [IWeightedIngredient](/Vanilla/Items/IWeightedIngredient/). That means all functions available to [IWeightedIngredient](/Vanilla/Items/IWeightedIngredient/) also are available to WeightedOreDictEntry.

## Calling a weightedOreDictEntry
You can derive a weightedOreDictEntry from an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) by either using the modulo operator or the weight function on it.

```zenscript
val oreDictEntry = <ore:ingotGold>;

//both create a weightedOreDictEntry object with a chance of 20%
val wOreDictEntry = liquidStack % 20;
val wOreDictEntry2 = liquidStack.weight(0.2);
```



## ZenGetters

| ZenGetter | What does it do                                      | Return Type                                    |
|-----------|------------------------------------------------------|------------------------------------------------|
| entry     | Returns the associated OreDictEntry                  | [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)|
| chance    | Returns the stack's chance as decimal (e.g. 0.2)     | float                                          |
| percent   | Returns the stack's chance as percentage (e.g. 20.0) | float                                          |