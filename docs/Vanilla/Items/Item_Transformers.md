# Item Transformers

Item Transformers transform your crafting inputs upon crafting.  
This can range from damaging the item up to returning a completely different item.

```Java

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