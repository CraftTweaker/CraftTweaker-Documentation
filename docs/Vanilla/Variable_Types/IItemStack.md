# IItemStack

An IItemStack Object consists of an item definition, a meta/damage value and NBT data.  
In other words, it refers an item or a block.

## Calling an IItemStack
Usually, the bracket handler returns an IItemStack Object, unless told not to do so.  
`<minecraft:apple>` returns an IItemStack.


## Functions
So what can we do with that now?

### IIngredient
A bit of Java jargon here: IItemStack is an interface and extends IIngredient. That means that all functions useable for IIngredients also work for IItemStacks, only that they will then return an IIngredient.
Please read the IIngredient page for further information on IIngredients.

### Definition
Returns the item definition as IItemDefinition Object. Refer to the specific page for further information.
```
<minecraft:apple>.definition;
```

### Name
Returns the unlocalized item name.

```
<minecraft:apple>.name;
```

### Display Name

The display name can either be retrieved or set, depending on what you are trying to accomplish.

```
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Sets apples Display Name to "Tomato"
apple.displayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
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
`tag` is an IData Object.

#### Remove Tags
You can also remove tags
```
item.removeTag(tag);
```
`tag` is an IData Object.


### Liquid
Returns the liquid contained in a single item (if multiple) or null if the item is no container.
Returns an ILiquidStack Object or null.

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
Returns a weightedItemStack with the provided percentage

```
val apple = <minecraft:apple>;

//Creates a weightedItemStack with 100 percent chance
var applePercentage = apple % 100;

//Does the same as te above
applePercentage = apple.weight(1.0);
```

### Damage

#### AnyDamage
Returns an IIngredient with wildcard damage. Only useful for items used as crafting ingredients.
```
<minecraft:iron_pickaxe>.anyDamage();
```

#### WithDamage
Returns an IItemStack with the given Damage.
```
<minecraft:iron_pickaxe>.withDamage(122);
```

### Ores
Returns a List of IOreDictEntries referring to this item.
```
<minecraft:apple>.ores;

### As IBlock
You can cast an IItemStack to an IBlock, as long as you are referring to a block, otherwise the cast results in null.