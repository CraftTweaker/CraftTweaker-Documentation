# Ore Dictionary  Entries

If you want to refer to all entries that share the same oreDictionary entry, you can use its oreDictionary tag in recipes.


## How to refer to oreDictionaries

You refer to oreDictionaries the same way as you refer to items, using Brackets.
An example of the OreDict Bracket Handler would be:

```
<ore:ingotIron>
```

This will give you access to the OreDict for `ingotIron`.


## How to add/remove an oreDic entry

You can use the add or remove function to add or remove an item's ore Dictionary entry.
```
//This will add dirt to the iron Ingot ore Dictionary
<ore:ingotIron>.add(<minecraft:dirt>);

//And this will remove iron ingots from the iron ingot ore Dictionary
<ore:ingotIron>.remove(<minecraft:iron_ingot>);
```

You can also use variables/values
```
var copper = <ore:ingotCopper>;
val iron = <ore:ingotIron>;
copper.add(<minecraft:dirt>);
iron.remove(<minecraft:iron_ingot>);
```

## How to make a new OreDictionary

If you want to create a new oreDictionary, you just refer to it as if it would already be present.
If CraftTweaker can't find an oreDictionary, it will create a new, empty one.

```
//Create oreDic called test
val myEntry = <ore:test>;

//adds coal and iron ingots to the test entry.
myEntry.add(<minecraft:coal>);
myEntry.add(<minecraft:iron_ingot>);
```

## Merge and unify OreDictionaries

If you have two oreDictionaries that are essentially the same (such as ironBlock and blockIron), you may want to unify them.
This can be done using the addAll and mirror function.

```
//make iron and copper equivalent
val iron = <ore:ingotIron>;
val copper = <ore:ingotCopper>;

//adds all entries from iron to copper so that Copper contains both, the iron and copper oreDic entries
iron.addAll(copper); 


//mirrors copper to iron, so all items in iron will be replaced by all the ones in copper.
//In this case that means by all iron and copper oreDic Entries
iron2.mirror(iron);
```

## Using oreDics in recipes

If you want to refer to all items in an oreDictionary, you can just use that entry where you'd normally put the single item.
```
val iron = <ore:ingotIron>;

recipes.add(<minecraft:dirt>,[[iron,iron,iron],[iron,iron,null],[iron,iron,iron]]);
```

## Iterating through an OreDictionary

You can iterate through an oreDictionary by making it to an array and iterating through that one.
This can be done using the function items.

```
val iron = <ore:ingotIron>;

for item in iron.items{
	recipe.remove(item);
}
```