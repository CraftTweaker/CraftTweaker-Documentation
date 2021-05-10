# MCItemStackMutable

An [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable) object is the same as any other [IItemStack](/vanilla/api/items/IItemStack). The only difference is that changes made to it will not create a new ItemStack, but instead modify the stack given.

 This is useful for example when you are dealing with Event Handlers and need to shrink the stack the player is using without assigning a new stack.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemStackMutable;
```


## Implemented Interfaces
MCItemStackMutable implements the following interfaces. That means all methods defined in these interfaces are also available in MCItemStackMutable

- [IItemStack](/vanilla/api/items/IItemStack)

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [IData](/vanilla/api/data/IData)                                  | true        |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true        |
| [MapData](/vanilla/api/data/MapData)                              | true        |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition)            | true        |
| [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)     | true        |

## Methods

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
MCItemStackMutable.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Parameter   | Type                                                      | Description             | Optional | DefaultValue |
| ----------- | --------------------------------------------------------- | ----------------------- | -------- | ------------ |
| contenu     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
MCItemStackMutable.addTooltip(content as MCTextComponent) as void
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| contenu   | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCItemStackMutable.anyDamage() as MCIngredientConditioned<IIngredient>

<item:minecraft:dirt>.mutable().anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
// MCItemStackMutable.asIIngredientWithAmount() as IIngredientWithAmount

<item:minecraft:dirt>.mutable().asIIngredientWithAmount();
```

:::

:::group{name=clearCustomName}

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
// MCItemStackMutable.clearCustomName() as void

<item:minecraft:dirt>.mutable().clearCustomName();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// MCItemStackMutable.clearTooltip() as void

<item:minecraft:dirt>.mutable().clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCItemStackMutable.contains(ingredient as IIngredient) as boolean

<item:minecraft:dirt>.mutable().contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                          | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=getDefinition}

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
// MCItemStackMutable.getDefinition() as MCItemDefinition

<item:minecraft:dirt>.mutable().getDefinition();
```

:::

:::group{name=getMaxStackSize}

Returns the max stack size of the Item in the ItemStack

Return Type: int

```zenscript
// MCItemStackMutable.getMaxStackSize() as int

<item:minecraft:dirt>.mutable().getMaxStackSize();
```

:::

:::group{name=getRarity}

Returns the rarity of the Item in the ItemStack

Return Type: [Rarity](/vanilla/api/item/Rarity)

```zenscript
// MCItemStackMutable.getRarity() as Rarity

<item:minecraft:dirt>.mutable().getRarity();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemStackMutable.getRemainingItem(stack as IItemStack) as IItemStack

<item:minecraft:dirt>.mutable().getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=isFood}

Return Type: boolean

```zenscript
// MCItemStackMutable.isFood() as boolean

<item:minecraft:dirt>.mutable().isFood();
```

:::

:::group{name=isImmuneToFire}

Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.

Return Type: boolean

```zenscript
// MCItemStackMutable.isImmuneToFire() as boolean

<item:minecraft:dirt>.mutable().isImmuneToFire();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// MCItemStackMutable.matches(stack as IItemStack) as boolean

<item:minecraft:dirt>.mutable().matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
MCItemStackMutable.modifyTooltip(function as ITooltipFunction) as void
```

| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCItemStackMutable.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCItemStackMutable.onlyDamaged() as MCIngredientConditioned<IIngredient>

<item:minecraft:dirt>.mutable().onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCItemStackMutable.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
MCItemStackMutable.removeTooltip(regex as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=setImmuneToFire}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

Return Type: void

```zenscript
// MCItemStackMutable.setImmuneToFire(immuneToFire as boolean) as void

<item:minecraft:dirt>.mutable().setImmuneToFire(true);
```

| Parameter    | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| immuneToFire | boolean | Should the item be immune to fire. |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

Return Type: void

```zenscript
// MCItemStackMutable.setMaxStackSize(newMaxStackSize as int) as void

<item:minecraft:dirt>.mutable().setMaxStackSize(16);
```

| Parameter       | Type | Description                         |
| --------------- | ---- | ----------------------------------- |
| newMaxStackSize | int  | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

Return Type: void

```zenscript
// MCItemStackMutable.setRarity(newRarity as Rarity) as void

<item:minecraft:dirt>.mutable().setRarity(Rarity.UNCOMMON);
```

| Parameter | Type                               | Description                 |
| --------- | ---------------------------------- | --------------------------- |
| newRarity | [Rarity](/vanilla/api/item/Rarity) | The new rarity of the Item. |


:::

:::group{name=weight}

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCItemStackMutable.weight(weight as double) as MCWeightedItemStack
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| weight    | double | No Description Provided |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCItemStackMutable
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <item:minecraft:dirt>.mutable()
```

:::

:::group{name=EQUALS}

```zenscript
myMCItemStackMutable == o as Object
```

:::

:::group{name=MOD}

```zenscript
myMCItemStackMutable % percentage as int
```

:::

:::group{name=OR}

```zenscript
myMCItemStackMutable | other as IIngredient
```

:::


## Properties

| Name           | Type                                                                  | Has Getter | Has Setter | Description                                                                                                                                  |
| -------------- | --------------------------------------------------------------------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| amount         | int                                                                   | true       | false      | Gets the amount of Items in the ItemStack                                                                                                    |
| burnTime       | int                                                                   | true       | true       | No Description Provided                                                                                                                      |
| damageable     | boolean                                                               | true       | false      | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                    |
| damaged        | boolean                                                               | true       | false      | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                     |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)                | true       | false      | No Description Provided                                                                                                                      |
| displayName    | string                                                                | true       | false      | Gets the display name of the ItemStack                                                                                                       |
| empty          | boolean                                                               | true       | false      | Returns if the ItemStack is empty                                                                                                            |
| food           | [MCFood](/vanilla/api/food/MCFood)?                                   | true       | true       | No Description Provided                                                                                                                      |
| getOrCreate    | [IData](/vanilla/api/data/IData)                                      | true       | false      | Returns the NBT tag attached to this ItemStack or makes a new tag.                                                                           |
| getRepairCost  | int                                                                   | true       | false      | Gets the repair cost of the ItemStack, or 0 if no repair is defined.                                                                         |
| hasDisplayName | boolean                                                               | true       | false      | Returns true if the ItemStack has a display name.                                                                                            |
| hasEffect      | boolean                                                               | true       | false      | Returns true if this ItemStack has an effect.                                                                                                |
| hasTag         | boolean                                                               | true       | false      | Returns true if this ItemStack has a Tag                                                                                                     |
| immuneToFire   | void                                                                  | true       | true       | Sets if this IItemStack is immune to fire / lava. <br />  <br />  If true, the item will not burn when thrown into fire or lava. |
| isCrossbow     | boolean                                                               | true       | false      | Returns true if this stack is considered a crossbow item                                                                                     |
| isEnchantable  | boolean                                                               | true       | false      | Can this ItemStack be enchanted?                                                                                                             |
| isEnchanted    | boolean                                                               | true       | false      | Is this ItemStack enchanted?                                                                                                                 |
| maxDamage      | int                                                                   | true       | false      | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                           |
| maxStackSize   | int                                                                   | true       | true       | Returns the max stack size of the Item in the ItemStack                                                                                      |
| owner          | string                                                                | true       | false      | Gets owning mod for the Item in this IItemStack                                                                                              |
| rarity         | [Rarity](/vanilla/api/item/Rarity)                                    | true       | true       | Returns the rarity of the Item in the ItemStack                                                                                              |
| registryName   | [format@@0 MCRessourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      | Gets the registry name for the Item in this IItemStack                                                                                       |
| stackable      | boolean                                                               | true       | false      | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                 |
| tag            | [IData](/vanilla/api/data/IData)                                      | true       | false      | Returns the NBT tag attached to this ItemStack.                                                                                              |
| toolTypes      | [ToolType](/vanilla/api/tool/ToolType)[]                              | true       | false      | No Description Provided                                                                                                                      |
| translationKey | string                                                                | true       | false      | Returns the unlocalized Name of the Item in the ItemStack                                                                                    |
| useDuration    | int                                                                   | true       | false      | Gets the use duration of the ItemStack                                                                                                       |

