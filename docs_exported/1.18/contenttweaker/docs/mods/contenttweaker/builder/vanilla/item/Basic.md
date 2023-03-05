# Basic

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.item.Basic;
```


## Extending ItemBuilder&lt;Basic&gt;

Basic extends [ItemBuilder](/mods/contenttweaker/builder/vanilla/item/ItemBuilder)&lt;[Basic](/mods/contenttweaker/builder/vanilla/item/Basic)&gt;. That means all methods available in [ItemBuilder](/mods/contenttweaker/builder/vanilla/item/ItemBuilder)&lt;[Basic](/mods/contenttweaker/builder/vanilla/item/Basic)&gt; are also available in Basic

## Methods

:::group{name=build}

Return Type: [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference)

```zenscript
Basic.build(name as string) as ItemReference
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=canAlwaysEat}

Return Type: T

```zenscript
Basic.canAlwaysEat(canEat as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| canEat    | boolean |


:::

:::group{name=cloning}

Return Type: T

```zenscript
Basic.cloning(properties as ItemProperties) as T
```

| Parameter  |                                     Type                                      |
|------------|-------------------------------------------------------------------------------|
| properties | [ItemProperties](/mods/contenttweaker/object/vanilla/property/ItemProperties) |


:::

:::group{name=cloning}

Return Type: T

```zenscript
Basic.cloning(standard as StandardItemProperties?, food as FoodItemProperties?) as T
```

| Parameter |                                              Type                                              |
|-----------|------------------------------------------------------------------------------------------------|
| standard  | [StandardItemProperties](/mods/contenttweaker/object/vanilla/property/StandardItemProperties)? |
| food      | [FoodItemProperties](/mods/contenttweaker/object/vanilla/property/FoodItemProperties)?         |


:::

:::group{name=craftRemainder}

Return Type: T

```zenscript
Basic.craftRemainder(remainder as ItemReference) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| remainder | [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference) |


:::

:::group{name=durability}

Return Type: T

```zenscript
Basic.durability(damage as int) as T
```

| Parameter | Type |
|-----------|------|
| damage    | int  |


:::

:::group{name=fastFood}

Return Type: T

```zenscript
Basic.fastFood(fast as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| fast      | boolean |


:::

:::group{name=fireResistant}

Return Type: T

```zenscript
Basic.fireResistant(fireResistance as boolean) as T
```

|   Parameter    |  Type   |
|----------------|---------|
| fireResistance | boolean |


:::

:::group{name=meat}

Return Type: T

```zenscript
Basic.meat(meat as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| meat      | boolean |


:::

:::group{name=nutrition}

Return Type: T

```zenscript
Basic.nutrition(nutrition as int) as T
```

| Parameter | Type |
|-----------|------|
| nutrition | int  |


:::

:::group{name=rarity}

Return Type: T

```zenscript
Basic.rarity(rarity as Rarity) as T
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| rarity    | [Rarity](/vanilla/api/item/property/Rarity) |


:::

:::group{name=saturationMod}

Return Type: T

```zenscript
Basic.saturationMod(modifier as float) as T
```

| Parameter | Type  |
|-----------|-------|
| modifier  | float |


:::

:::group{name=stacksTo}

Return Type: T

```zenscript
Basic.stacksTo(size as int) as T
```

| Parameter | Type |
|-----------|------|
| size      | int  |


:::

:::group{name=tab}

Return Type: T

```zenscript
Basic.tab(tab as CreativeTabReference) as T
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| tab       | [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference) |


:::


