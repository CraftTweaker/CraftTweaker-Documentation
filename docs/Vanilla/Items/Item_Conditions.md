# Item Conditions

Sometimes normal items won't cut it:  

Sometimes we want to be able to specify recipes that only work when the input item fulfills some conditions.  

Sometimes we want to be able to specify recipes that will produce a special item, be it with NBT-Tag or Damage value or otherwise.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemCondition;`

## Input Conditions

These will affect the items that you can use to craft the resulting item.
Remember, you can mix modifiers, to mix Damage and NBT-Tag, for example
```
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "Aren't we all butterflies?"}});
```
### Damage

#### anyDamage
The input item's damage value does not matter for the recipe
```
item.anyDamage()
```

#### onlyDamaged
The input item needs to be damaged
```
item.onlyDamaged();
```

#### Damaged at least
Input item's damage value needs to be at least the specified `value`  
`Value` is an int
```
item.onlyDamageAtLeast(value);
```

#### Damage at most
Input item's damage value needs to be at max the specified `value`  
`Value` is an int
```
item.onlyDamageAtMost(value);
```

#### Damage between
Input item's damage value needs to be between the speciefied `value1` and `value2`  
`Value1` is an int  
`Value2` is an int  
```
item.onlyDamageBetween(value1, value2);
```

### Get Items back or explicitly forbid an item's reusability
Sometimes you need a recipe where you get some of your input items back.  
By applying `transformDamage(int)` you can create such recipes.


#### transformDamage
The input item will receive `value` damage points and you will get it back, unless it breaks during the crafting process.  
`Value` is an int
```
item.transformDamage(value);
```

### NBT-Tags
Sometimes you want your ingredients to need a specific NBT-Tag.
The recipe doesn't care if your item has NBT-Tags other than the ones specified, 
So a pickaxe with a specific lore may also be enchanted!  

If you use `withTag` jei will display it properly, if you use `onlyWithTag`, jei will only display a tagless item!

Here's how you do it:
`NBTTag` is your NBT Data
```
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "Pickle the Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}});
```

## Output modifiers

If you can specify input conditions, it's not so hard to also define output conditions, or rather, output modifiers.

### Damage
Your output item will have `value` damage points.  
`Value` is an int.
```
item.withDamage(value);
```

### NBT-Tags
Your output item will have `NBTTag` as NBT-Tag.  
`NBTTag` is your NBT Data
```
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}})
```


## Registering own item Conditions

You can also add your own itemConditions. These are special functions that accept the [item](IItemStack) itself as single parameter.

```
transformedItem = item.transform(function(item) {return true;});
```

The function needs to return a bool that is true if the item matches the condition.
