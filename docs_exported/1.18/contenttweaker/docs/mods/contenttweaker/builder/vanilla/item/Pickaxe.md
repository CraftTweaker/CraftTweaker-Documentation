# Pickaxe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.item.Pickaxe;
```


## Extending ToolBuilder&lt;Pickaxe&gt;

Pickaxe extends [ToolBuilder](/mods/contenttweaker/builder/vanilla/item/ToolBuilder)&lt;[Pickaxe](/mods/contenttweaker/builder/vanilla/item/Pickaxe)&gt;. That means all methods available in [ToolBuilder](/mods/contenttweaker/builder/vanilla/item/ToolBuilder)&lt;[Pickaxe](/mods/contenttweaker/builder/vanilla/item/Pickaxe)&gt; are also available in Pickaxe

## Methods

:::group{name=attackSpeed}

Return Type: T

```zenscript
Pickaxe.attackSpeed(attackSpeed as float) as T
```

|  Parameter  | Type  |
|-------------|-------|
| attackSpeed | float |


:::

:::group{name=baseAttackDamage}

Return Type: T

```zenscript
Pickaxe.baseAttackDamage(attackDamageBase as float) as T
```

|    Parameter     | Type  |
|------------------|-------|
| attackDamageBase | float |


:::

:::group{name=build}

Return Type: [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference)

```zenscript
Pickaxe.build(name as string) as ItemReference
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=canAlwaysEat}

Return Type: T

```zenscript
Pickaxe.canAlwaysEat(canEat as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| canEat    | boolean |


:::

:::group{name=cloning}

Return Type: T

```zenscript
Pickaxe.cloning(properties as ItemProperties) as T
```

| Parameter  |                                     Type                                      |
|------------|-------------------------------------------------------------------------------|
| properties | [ItemProperties](/mods/contenttweaker/object/vanilla/property/ItemProperties) |


:::

:::group{name=cloning}

Return Type: T

```zenscript
Pickaxe.cloning(standard as StandardItemProperties?, food as FoodItemProperties?) as T
```

| Parameter |                                              Type                                              |
|-----------|------------------------------------------------------------------------------------------------|
| standard  | [StandardItemProperties](/mods/contenttweaker/object/vanilla/property/StandardItemProperties)? |
| food      | [FoodItemProperties](/mods/contenttweaker/object/vanilla/property/FoodItemProperties)?         |


:::

:::group{name=craftRemainder}

Return Type: T

```zenscript
Pickaxe.craftRemainder(remainder as ItemReference) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| remainder | [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference) |


:::

:::group{name=durability}

Return Type: T

```zenscript
Pickaxe.durability(damage as int) as T
```

| Parameter | Type |
|-----------|------|
| damage    | int  |


:::

:::group{name=fastFood}

Return Type: T

```zenscript
Pickaxe.fastFood(fast as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| fast      | boolean |


:::

:::group{name=fireResistant}

Return Type: T

```zenscript
Pickaxe.fireResistant(fireResistance as boolean) as T
```

|   Parameter    |  Type   |
|----------------|---------|
| fireResistance | boolean |


:::

:::group{name=meat}

Return Type: T

```zenscript
Pickaxe.meat(meat as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| meat      | boolean |


:::

:::group{name=nutrition}

Return Type: T

```zenscript
Pickaxe.nutrition(nutrition as int) as T
```

| Parameter | Type |
|-----------|------|
| nutrition | int  |


:::

:::group{name=rarity}

Return Type: T

```zenscript
Pickaxe.rarity(rarity as Rarity) as T
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| rarity    | [Rarity](/vanilla/api/item/property/Rarity) |


:::

:::group{name=saturationMod}

Return Type: T

```zenscript
Pickaxe.saturationMod(modifier as float) as T
```

| Parameter | Type  |
|-----------|-------|
| modifier  | float |


:::

:::group{name=stacksTo}

Return Type: T

```zenscript
Pickaxe.stacksTo(size as int) as T
```

| Parameter | Type |
|-----------|------|
| size      | int  |


:::

:::group{name=tab}

Return Type: T

```zenscript
Pickaxe.tab(tab as CreativeTabReference) as T
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| tab       | [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference) |


:::

:::group{name=tier}

Return Type: T

```zenscript
Pickaxe.tier(tier as TierReference) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| tier      | [TierReference](/mods/contenttweaker/object/vanilla/TierReference) |


:::


