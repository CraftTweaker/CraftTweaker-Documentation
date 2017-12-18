# Item Transformers

Item Transformers transform your crafting inputs upon crafting.  
This can range from damaging the item up to returning a completely different item.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemTransformer;`

```Java

val item = <minecraft:apple>;

//Item won't be consumed and will be placed in your inventory upon crafting.
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


## Registering own item Transformers

You can also add your own itemTransformers. These are special functions that accept two parameters: The [item](IItemStack) itself and the [player](/Vanilla/Game/IPlayer) performing the crafting.

```
transformedItem = item.transform(function(item, player) {return item;});
```

The function needs to return an [IItemStack](IItemStack)
