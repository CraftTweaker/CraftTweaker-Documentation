# IIngredient

An IIngredient is an ingredient for recipes.  
This could be an item, an ore dictionary entry, a liquid and much more.

## Importing the IIngredient package

Usually, you won't need this, but in some cases recipes won't work until you import the IIngredient package.  
You can do this using the following import:
```
import crafttweaker.item.IIngredient;
```

## Functions
So, what can we do with this?

### Mark

You can mark an IIngredient so you can later use it in crafting functions.
You can also retrieve the mark applied earlier.

```
//Marks the pick with the String Picky
//item.marked(name) <-- Name is a string!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//prints "Picky"
print(markedPick.mark);
```

### Amount

If you want to use more than one of a given item, you can set an amount to an IIngredient.  
This is as easy as multiplying the IIngredient with an integer.  
Retrieveing the amount is also possible.
```
val multipleApples = <minecraft:apple> * 3;

//prints 3
print(multipleApples.amount);
```

### OR-ing an IIngredient
Sometimes you want either IIngredient X or Y, but don't want to create a recipe for each possibility?
That's why there's the OR Method for IIngredients:
```
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val either = item1 | item2;
val either2 = item1.or(item2);
```

One word of advice though:
Using the OR methods is not adviced, as JEI does not display these recipes and sometimes the inputs won't even be consumed!


### Get Possible Items or Liquids

Sometimes an IIngredient represents more than one item, for example if you are using an OreDictEntry or if you OR-ed two Ingredients.  
You can get all possible items for this IIngredient in an IItemStack List using the first function.  
The second function does the same as the first function but returns a IItemStack[] instead of a list.
Same goes for liquids in the third function, only they return an ILiquidStack List.


```
//Returns an IItemStack List
//possible items: All iron ingots and the gold ingot from MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;


//Returns an ILiquidStack List|
//possible liquids: Lava and Water
val liquidsIngredient = <liquid:lava> | <liquid:water>;


for item in itemsIngredient.items{
	//Prints each possible item's Display name
	print(item.displayName);
}

for item in itemsIngredient.itemArray{
	//Prints each possible item's Display name
	print(item.displayName);
}

for liquid in liquidsIngredient.liquids{
	//Prints each possible liquid's Display name
	print(liquid.displayName);
}
```

### Transform an IIngredient upon crafting
Sometimes you want an item not to be consumed upon crafting but instead receive damaged or give back a completely different item.  
This is what item Transformers are there for. 

```

val item = <minecraft:apple>;

//Item won't be consumed and stays in the crafting slot.
var transformedItem = item.reuse();

//Item won't be consumed but will be placed in your inventory upon crafting.
transformedItem = item.giveBack();

//item will be consumed but will return the specified item to your inventory upon crafting.
transformedItem = item.giveBack(<minecraft:potato>);

//item will be replaced with the specified item, which will instead go to the crafting slot
transformedItem = item.transformReplace(<minecraft:potato>);

//damages the item by 1
transformedItem = item.transformDamage();

//damages the item by the given value
transformedItem = item.transformDamage(3);

//item will be consumed, no matter what.
transformedItem = item.noReturn();

//Causes multiple items to be consumed.
transformedItem = item.transformConsume(3);
```

### Ingredient Conditions
Sometimes you want your ingredient to have a specific tag or to only work if (not) damaged.
These Conditions can be added to your Ingredients using the following:

```
val item = <minecraft:apple>;

//Item will only be accepted with at least 1 point damage
var conditionedItem = item.onlyDamaged();

//Item will only be accepted with at least the specified damage points
conditionedItem = item.onlyDamageAtLeast(10);

//Item will only be accepted with at most the specified damage points
conditionedItem = item.onlyDamageAtMost(100);

//Item will only be accepted with damage points greater or equal as the first and lesser or equal as the 2nd Integer.
conditionedItem = item.onlyDamageBetween(10,100);

//Item will only be accepted with the specified Tag. The item may have more/other tags than specified, those are ignored when checked.
conditionedItem = item.onlyWithTag({display: {Name: "Tomato"}});

//Item will only be accepted if in a Stack of at least the specified amount. Mostly used in combination with the consume transformer.
//Note that if you only add this, you will still require only one item per craft.
conditionedItem = item.onlyStack(32);
```

### Matching
If you want to check if an IItemStack matches your IIngredient you can use the match method. This will return a boolean.
If the IIngredient represents a liquid, it will check if the item is a valid container for this liquid.

```
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```
You can also match two IIngredient Objects, in which case you'd need to use the in operator:

```
val ingots = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
val goldOre = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;


//true as the gold ingot is in the ingots Ingredient
ingots in ingotGold;

//false as <minecraft:iron_ingot> cannot be found in <ore:ingotGold>
goldOre in ingots;
```