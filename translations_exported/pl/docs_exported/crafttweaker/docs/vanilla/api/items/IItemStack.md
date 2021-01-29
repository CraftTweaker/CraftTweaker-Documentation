# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [IIngredient](/vanilla/api/items/IIngredient)

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IItemStack;
```


## Implemented Interfaces
IItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in IItemStack

- [IIngredient](/vanilla/api/items/IIngredient)
- [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)
## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true        |
| [Stos przedmiotów](/vanilla/api/item/ItemStack)                   | true        |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition)            | true        |
| [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)     | true        |

## Methods

### addShiftTooltip

Return Type: void

```zenscript
IItemStack.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```
| Parameter   | Type                                                       | Description             | Optional | DefaultValue |
| ----------- | ---------------------------------------------------------- | ----------------------- | -------- | ------------ |
| zawartość   | [Komponent MCText](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [Komponent MCText](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |
### addTooltip

Return Type: void

```zenscript
IItemStack.addTooltip(content as MCTextComponent) as void
```
| Parameter | Type                                                       | Description             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| zawartość | [Komponent MCText](/vanilla/api/util/text/MCTextComponent) | No Description Provided |

### asIIngredientWithAmount

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IItemStack.asIIngredientWithAmount() as IIngredientWithAmount
<item:minecraft:dirt>.asIIngredientWithAmount();
```
### clearCustomName

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
IItemStack.clearCustomName() as void
<item:minecraft:dirt>.clearCustomName();
```
### clearTooltip

Return Type: void

```zenscript
IItemStack.clearTooltip() as void
<item:minecraft:dirt>.clearTooltip();
```
### copy

Creates a copy

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.copy() as IItemStack
<item:minecraft:dirt>.copy();
```
### getDefinition

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
IItemStack.getDefinition() as MCItemDefinition
<item:minecraft:dirt>.getDefinition();
```
### getInternal

Gets the internal [ItemStack](/vanilla/api/item/ItemStack) for this IItemStack.

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IItemStack.getInternal() as ItemStack
<item:minecraft:dirt>.getInternal();
```
### modifyTooltip

Return Type: void

```zenscript
IItemStack.modifyTooltip(function as ITooltipFunction) as void
```
| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |

### zmienny

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.mutable() as IItemStack
<item:minecraft:dirt>.mutable();
```
### removeTooltip

Return Type: void

```zenscript
IItemStack.removeTooltip(regex as string) as void
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |

### setDisplayName

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.setDisplayName(name as string) as IItemStack
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```
| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| name      | string | New name of the stack. |

### weight

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
IItemStack.weight(weight as double) as MCWeightedItemStack
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| weight    | double | No Description Provided |

### withDamage

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withDamage(damage as int) as IItemStack
<item:minecraft:dirt>.withDamage(10);
```
| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |

### withTag

Sets the tag for the ItemStack.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withTag(tag as IData) as IItemStack
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```
| Parameter | Type                             | Description     |
| --------- | -------------------------------- | --------------- |
| tag       | [IData](/vanilla/api/data/IData) | The tag to set. |


## Operators

### MOD

```zenscript
myIItemStack % percentage as int
```


### MUL

Sets the amount of the ItemStack

```zenscript
myIItemStack * amount as int
<item:minecraft:dirt> * 3
```



## Properties

| Name           | Type                                                       | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                        | true       | false      |
| burnTime       | int                                                        | true       | true       |
| damage         | int                                                        | true       | false      |
| damageable     | boolean                                                    | true       | false      |
| damaged        | boolean                                                    | true       | false      |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)     | true       | false      |
| displayName    | string                                                     | true       | false      |
| empty          | boolean                                                    | true       | false      |
| food           | [MCFood](/vanilla/api/food/MCFood)                         | true       | true       |
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

