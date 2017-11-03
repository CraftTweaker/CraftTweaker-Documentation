# IItemStack

An IItemStack Object consists of an [item definition](IItemDefinition), a meta/damage value and NBT data.  
In other words, it refers an item or a block.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemStack;`

## Calling an IItemStack
There are several methods that return an IItemStack

* Using the [bracket Handler](/Vanilla/Brackets/Bracket_Item) `<minecraft:apple>`
* Using the `makeStack()` method on a [IItemDefinition](IItemDefinition) object `<minecraft:stone>.definition.makeStack(0)`
* Using the `stack` getter on a [IEntityDrop](/Vanilla/Entities/IEntityDrop) object
* Using the `firstItem` getter on a [ore Dictionary entry](/Vanilla/OreDict)

## Calling an IItemStack[] or a IItemStack List
If you call these functions, you will most likely do so to iterate through the resulting lists/Arrays

* Using the `items` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient) returns a IItemStack List: `<ore:ingotGold>.items`
* Using the `itemArray` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient) returns a IItemStack[]: `<ore:ingotGold>.itemArray`
* Using the `items` method on a [IMod](/Vanilla/Game/Mods#imod) object returns a IItemStack[]: `loadedMods["minecraft"].items`


## Functions
So what can we do with that now?

### IIngredient
A bit of Java jargon here: IItemStack is an interface and extends IIngredient. That means that all functions useable for [IIngredient](/Vanilla/Variable_Types/IIngredient) also work for IItemStacks, only that they will then return an IIngredient.
Please read the IIngredient page for further information on IIngredients.

### Definition
Returns the item definition as [IItemDefinition](IItemDefinition) Object.
```
<minecraft:apple>.definition;
```

### Name
Returns the unlocalized item name as string.

```
<minecraft:apple>.name;
```

### Display Name

#### Globally
An item's standard display name can either be retrieved or set, depending on what you are trying to accomplish.

```
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Sets apples Display Name to "Tomato"
apple.displayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

#### Locally

You can also use this to add a display name to the item, even if it already has NBT. Supports color codes with `§`.  
Note that this does works on a per-item basis, so it does not change the standard item name.
```JAVA
<minecraft:coal>.withDisplayName("Black Gold");
```

### Lore

You can add lore to the item, even if it already has NBT. Supports color codes with `§`.
```JAVA
<minecraft:coal>.withLore(["This function","requires a","string[]"]);
```


### Maximum Stack Size
The maximum Stack Size is how many items fit in one Stack, for example, wool's Stack size is 64 and Buckets' only 16.
The Stack Size can either be retrieved or set, depending on what you are trying to accomplish.

```
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(apple.maxStackSize);

//sets apples Max Stack size to 32
apple.maxStackSize = 32;

//prints 32
print(apple.maxStackSize);

//sets apples Max Stack size to Bucket's Max Stack size
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

### Hardness
The Hardness is how long it takes to break the referred block. Only works if the object refers to a block.
The Hardness can either be retrieved or set, depending on what you are trying to accomplish.

```
val grass = <minecraft:grass>;

//prints 1.0
print(grass.hardness);

//sets grass Hardness to 10.0
grass.hardness = 10.0;

//prints 10.0
print(grass.hardness);
```

### Damage
Returns the item Damage or 0 if the item cannot be damaged.
```
<minecraft:apple>.damage;
```

### Maximum Damage
The Maximum Damage can either be retrieved or set, depending on what you are trying to accomplish.

```
val pick = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick.maxDamage);

//sets the max damage of the Diamond Pickaxe to 256
pick.maxDamage = 256;

//prints 256
print(pick.maxDamage);
```

### Tag
Returns the NBT-Data. Empty if no NBT Data contained, never null.
```
<minecraft:apple>.tag;
```
#### Add Tag
You can also create items with a specific or empty tag using:
```
//creates apple with the given tag
<minecraft:apple>.withTag(tag);

//creates apple with an emtpy tag
<minecraft:apple>.withEmptyTag();
```
`tag` is an [IData](/Vanilla/Data/IData) Object.

#### Remove Tags
You can also remove tags
```
item.removeTag(tag);
```
`tag` is an [IData](/Vanilla/Data/IData) Object.


### Liquid
Returns the liquid contained in a single item (if multiple) or null if the item is no container.
Returns an [ILiquidStack](/Vanilla/Liquids/ILiquidStack) Object or null.

```
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

### Amount
Returns the same itemStack but with another amount

#### Any Amount

Returns a wildcard Stack Size
```
<minecraft:apple>.anyAmount();
```

#### Specific amount
```
//1 Apple
val apple = <minecraft:apple>;

//2 Apples
val moreApples = apple * 2;

//3 Apples
val evenMoreApples = <minecraft:apple> * 3;
```

### Weight
Returns a [weightedItemStack](weightedItemStack) with the provided percentage

```
val apple = <minecraft:apple>;

//Creates a weightedItemStack with 100 percent chance
var applePercentage = apple % 100;

//Does the same as the above
applePercentage = apple.weight(1.0);
```

### Damage

#### AnyDamage
Returns an [IIngredient](/Vanilla/Variable_Types/IIngredient) with wildcard damage. Only useful for items used as crafting ingredients.
```
<minecraft:iron_pickaxe>.anyDamage();
```

#### WithDamage
Returns an IItemStack with the given Damage.
```
<minecraft:iron_pickaxe>.withDamage(122);
```

### Ores
Returns a List of [IOreDictEntries](/Vanilla/OreDict) referring to this item.
```
<minecraft:apple>.ores;
```

### As IBlock
You can cast an IItemStack to an [IBlock](/Vanilla/Blocks/IBlock), as long as you are referring to a block, otherwise the cast results in null.

## ItemTransformers and ItemConditions
You can find how to use these either in the [IIngredient](/Vanilla/Variable_Types/IIngredient) page or in their respecive entries:  
[Item Conditions](Item_Conditions)  
[Item Transformers](Item_Transformers)