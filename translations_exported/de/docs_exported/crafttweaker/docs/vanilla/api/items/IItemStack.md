# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(Inhalt als crafttweaker.api.util.text.MCTextComponent, showMessage als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter       | Type                                                                                 | Beschreibung            | IsOptional | Standardwert |
| --------------- | ------------------------------------------------------------------------------------ | ----------------------- | ---------- | ------------ |
| inhalt          | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided | false      | `null`       |
| zeige Nachricht | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided | true       | `null`       |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(Inhalt als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| inhalt    | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### anyDamage

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anySchaden();
```

### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy

Erstellt eine Kopie

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                              |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung       |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(Stapel als crafttweaker.api.item.IItemStack, ignoreSchaden als boolean);
```

| Parameter     | Type                                                              | Beschreibung                       |
| ------------- | ----------------------------------------------------------------- | ---------------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check                 |
| ignoreSchaden | boolean                                                           | Soll der Schaden überprüft werden? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(Funktion als crafttweaker.api.item.tooltip.ITooltipFunktion);
```

| Parameter | Type                                                                                              | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| function  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | No description provided |


### mutierbar

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### onlyDamaged

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Beschreibung            | IsOptional | Standardwert |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------ |
| uid       | String                                                                                                  | No description provided | false      | `null`       |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`       |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| regex     | String | No description provided |


### setDisplayName

Sets the display name of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parameter | Type   | Beschreibung           |
| --------- | ------ | ---------------------- |
| name      | String | New name of the stack. |


### weight

Rückgabetyp: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(Gewicht als Doppel);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| weight    | double | No description provided |


### withDamage

Sets the damage of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parameter | Type | Beschreibung         |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


### withTag

Sets the tag for the ItemStack.

 Gibt `diesen Gegenstandstapel zurück, wenn er veränderbar ist, andernfalls ein neuer mit der geänderten Eigenschaft`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type                                                   | Beschreibung    |
| --------- | ------------------------------------------------------ | --------------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Properties

| Name           | Type                                                                | Has Getter | Has Setter |
| -------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                                 | true       | false      |
| burnTime       | int                                                                 | true       | true       |
| commandString  | String                                                              | true       | false      |
| damage         | int                                                                 | true       | false      |
| damageable     | boolean                                                             | true       | false      |
| damaged        | boolean                                                             | true       | false      |
| displayName    | String                                                              | true       | false      |
| empty          | boolean                                                             | true       | false      |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true       | true       |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| getRepairCost  | int                                                                 | true       | false      |
| hasDisplayName | boolean                                                             | true       | false      |
| hasEffect      | boolean                                                             | true       | false      |
| hasTag         | boolean                                                             | true       | false      |
| isCrossbow     | boolean                                                             | true       | false      |
| isEnchantable  | boolean                                                             | true       | false      |
| isEnchanted    | boolean                                                             | true       | false      |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |
| maxDamage      | int                                                                 | true       | false      |
| maxStackSize   | int                                                                 | true       | false      |
| owner          | String                                                              | true       | false      |
| registryName   | String                                                              | true       | false      |
| stackable      | boolean                                                             | true       | false      |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| translationKey | String                                                              | true       | false      |
| useDuration    | int                                                                 | true       | false      |

## Operatoren
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parameter | Type | Beschreibung |
| --------- | ---- | ------------ |
| amount    | int  | new amount   |
### MOD

```zenscript
<item:minecraft:dirt> % Prozentsatz als Int
```

| Parameter  | Type | Beschreibung            |
| ---------- | ---- | ----------------------- |
| prozentual | int  | No description provided |
### OR (ODER)

```zenscript
<tag:ingotIron> | Andere als crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

