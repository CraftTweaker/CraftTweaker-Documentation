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

## How to add/remove multiple oreDic entries

You can use the addItems or removeItems functions to add/remove all items of an array to/from an oreDictionary
PS: Yes, I know this script down there is kinda useless, but it's just for demonstration ☺
```
import minetweaker.item.IItemStack;

val array = [<minecraft:iron_ingot>,<minecraft:dirt>,<minecraft:gold_ingot>] as IItemStack[];
val array2 = [<minecraft:iron_ingot>,<minecraft:dirt>] as IItemStack[];
val copper = <ore:copper>;

//adds iron, dirt, gold to Copper oreDic
copper.addItems(array);

//removes iron, dirt from Copper oreDic
copper.removeItems(array2);

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

## Check if an oreDic is empty

You can check if an oreDic is empty using the `oreDic.empty` function. This will return a boolean.
```
val OD = <ore:ingotIron>;
if(!OD.empty){
	//if ingotIron oreDic is not empty, print "NOPE"
	print("NOPE")
}
```

## Check if an oreDic contains an item

Usually, you can just use NEI/JEI, but if you ever need CT to check if a oreDictionary contains a specific item, you can use the `in` function.  
Remember, first the oreDic, then the item you want to check for.  
This will return a boolean.

```

if(<ore:ingotIron> in <minecraft:iron_ingot>){
	print("Iron is in the oreDic!");
}
```

## Get an oreDics name

If you ever need to get an oreDics name, you can use the `oreDic.name` function. This will return the name as String.  
The oreDic name is the part after the `:` in `<ore:name>`
```
val OD = <ore:ingotIron>;

//prints "ingotIron"
print(OD.name);

## Get the first item of an oreDic

I have no idea why you would ever need this, but here you go
the firstItem function returns an IItemStack

```
val fI = <ore:ingotIton>.firstItem;
print(fI.name);
```