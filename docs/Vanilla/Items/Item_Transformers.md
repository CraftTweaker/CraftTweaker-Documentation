# Item Transformers

Item Transformers transform your crafting inputs upon crafting.  
This can range from damaging the item up to returning a completely different item.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemTransformer;`

```Java

val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//item will be consumed but will give the specified stack to you (the crafting slot will be cleared!).
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


## Registering own item Transformers
### Transform
The old itemTransformer that might cease to exist in 1.13.  
Thisis a special function that accepts two parameters: The [item](/Vanilla/Items/IItemStack/) itself and the [player](/Vanilla/Players/IPlayer/) performing the crafting.

```
transformedItem = item.transform(function(item, player) {return item;});
```

The function needs to return an [IItemStack](/Vanilla/Items/IItemStack/).  
This stack will replace what's in the crafting slot afterwards. Use `null` to clear that slot.

### TransformNew
With the new internal recipe system there was a need for a new ItemTransformer. This one only accepts one parameter, that is the item in the slot.

```
transformedItem = item.transformNew(function(item){return item;});
```

The function needs to return an [IItemStack](/Vanilla/Items/IItemStack/).  
Unlike the other transformer however, this will not be the itemstach that replaces the one in the crafting slot, but the one that is returned for that crafting slot.  
In other words if you return `null` here, one item will be consumed, any other item that is returned will either be placed in the crafting slot, if possible, or given back to you, same as when dealing with buckets.  
If you don't really need the player variable, this is the transformer to go for!