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
| content     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
MCItemStackMutable.addTooltip(content as MCTextComponent) as void
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| content   | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCItemStackMutable.anyDamage() as MCIngredientConditioned<IIngredient>
<item:minecraft:dirt>.mutable().anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
MCItemStackMutable.asIIngredientWithAmount() as IIngredientWithAmount
<item:minecraft:dirt>.mutable().asIIngredientWithAmount();
```

:::

:::group{name=clearCustomName}

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
MCItemStackMutable.clearCustomName() as void
<item:minecraft:dirt>.mutable().clearCustomName();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
MCItemStackMutable.clearTooltip() as void
<item:minecraft:dirt>.mutable().clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
MCItemStackMutable.contains(ingredient as IIngredient) as boolean
<item:minecraft:dirt>.mutable().contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                          | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=getDefinition}

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
MCItemStackMutable.getDefinition() as MCItemDefinition
<item:minecraft:dirt>.mutable().getDefinition();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemStackMutable.getRemainingItem(stack as IItemStack) as IItemStack
<item:minecraft:dirt>.mutable().getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
MCItemStackMutable.matches(stack as IItemStack) as boolean
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
MCItemStackMutable.onlyDamaged() as MCIngredientConditioned<IIngredient>
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

| Name           | Type                                                       | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                        | true       | false      |
| burnTime       | int                                                        | true       | true       |
| damageable     | boolean                                                    | true       | false      |
| damaged        | boolean                                                    | true       | false      |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)     | true       | false      |
| displayName    | string                                                     | true       | false      |
| empty          | boolean                                                    | true       | false      |
| getOrCreate    | [IData](/vanilla/api/data/IData)                           | true       | false      |
| getRepairCost  | int                                                        | true       | false      |
| hasDisplayName | boolean                                                    | true       | false      |
| hasEffect      | boolean                                                    | true       | false      |
| hasTag         | boolean                                                    | true       | false      |
| isCrossbow     | boolean                                                    | true       | false      |
| isEnchantable  | boolean                                                    | true       | false      |
| isEnchanted    | boolean                                                    | true       | false      |
| maxDamage      | int                                                        | true       | false      |
| maxStackSize   | int                                                        | true       | false      |
| owner          | string                                                     | true       | false      |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| stackable      | boolean                                                    | true       | false      |
| tag            | [IData](/vanilla/api/data/IData)                           | true       | false      |
| translationKey | string                                                     | true       | false      |
| useDuration    | int                                                        | true       | false      |

