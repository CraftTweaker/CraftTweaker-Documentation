# Item Conditions

Sometimes normal items won't cut it and we want to:

* specify recipes that only work when the input item fulfills some conditions.  
* specify recipes that will produce a special item, be it with NBT-Tag or Damage value or otherwise.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemCondition;`

## Input Conditions

These will affect the items that you can use to craft the resulting item.
Remember, you can mix modifiers, to mix Damage and NBT-Tag, for example
```zenscript
<minecraft:iron_pickaxe>.anyDamage().onlyDamaged().withTag({display: {Lore: "Aren't we all butterflies?"}});
```
### Damage

#### anyDamage
The input item's damage value does not matter for the recipe
```zenscript
item.anyDamage();
```

#### onlyDamaged
The input item needs to be damaged. Only works in combination with `anyDamage()`!
```zenscript
item.anyDamage().onlyDamaged();
```

#### Damaged at least
Input item's damage value needs to be at least the specified `value`. Only works in combination with `anyDamage()`!
```zenscript
item.anyDamage().onlyDamageAtLeast(value as int);
```

#### Damaged at most
Input item's damage value needs to be at most the specified `value`. Only works in combination with `anyDamage()`!
```zenscript
item.anyDamage().onlyDamageAtMost(value as int);
```

#### Damaged between
Input item's damage value needs to be between the specified `min` and `max`. Only works in combination with `anyDamage()`!
```zenscript
item.anyDamage().onlyDamageBetween(min as int, max as int);
```

#### transformDamage
The input item will receive `value` damage points and you will get it back, unless it breaks during the crafting process.  
You can also use this to repair items by having a negative `value`.
```zenscript
item.transformDamage(value as int);
```

### NBT-Tags
Sometimes you want your ingredients to require a specific NBT-Tag.
The recipe doesn't care if your item has NBT-Tags other than the ones specified, 
So a pickaxe with a specific lore may also be enchanted!  

If you use `withTag` JEI will display it properly, if you use `onlyWithTag`, JEI will only display a tagless item!

Here's how you do it:
```zenscript
item.withTag(tag as IData);
item.onlyWithTag(tag as IData);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}});
<minecraft:iron_pickaxe>.onlyWithTag({display: {Name: "Pickle the Pickleberry"}});
```

## Output modifiers
If you can specify input conditions, it's not so hard to also define output conditions, or rather, output modifiers.

### Damage
Your output item will have `value` damage points.  
```zenscript
item.withDamage(value as int);
```

### NBT-Tags
Your output item will have `tag` as the NBT-Tag.  
```zenscript
item.withTag(tag as IData);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}})
```


## Registering custom Item Conditions

You can also add your own itemConditions. These are special functions that accept the [item](/Vanilla/Items/IItemStack/) itself as single parameter.
```zenscript
conditionedItem = item.only(function(itm as IItemStack) as bool {
  var b as bool = true;
  // do something with itm
  return b;
});
```

The function needs to return a bool that is true if the item matches the condition.
