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
| [ItemStack](/vanilla/api/item/ItemStack)                          | true        |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition)            | true        |
| [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)     | true        |

## Methods

### addShiftTooltip

Return Type: void

```zenscript
IItemStack.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```
| Parameter   | Type                                                      | Description             | Optional | DefaultValue |
| ----------- | --------------------------------------------------------- | ----------------------- | -------- | ------------ |
| コンテンツ       | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |
### addTooltip

Return Type: void

```zenscript
IItemStack.addTooltip(content as MCTextComponent) as void
```
| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| コンテンツ     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |

### asIIngredientWithAmount

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IItemStack.asIIngredientWithAmount() as IIngredientWithAmount
<item:minecraft:dirt>.asIIngredientWithAmount();
```
### clearCustomName

ItemStackに設定されているカスタムネームを取り除きます。

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

### ミュータブル

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

ItemStackに表示される名前を設定します。

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.setDisplayName(name as string) as IItemStack
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```
| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| name      | string | stackの新しい名前 |

### weight

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
IItemStack.weight(weight as double) as MCWeightedItemStack
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| weight    | double | No Description Provided |

### withDamage

ItemStackのダメージ(耐久値)を設定します。

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withDamage(damage as int) as IItemStack
<item:minecraft:dirt>.withDamage(10);
```
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| damage    | int  | 新しいダメージの値   |

### withTag

ItemStackのタグを設定します。

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withTag(tag as IData) as IItemStack
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```
| Parameter | Type                             | Description |
| --------- | -------------------------------- | ----------- |
| tag       | [IData](/vanilla/api/data/IData) | タグを設定       |


## 演算子

### MOD

```zenscript
myIItemStack % percentage as int
```


### MUL

ItemStackの数量(スタック数)を設定します。

```zenscript
myIItemStack * amount as int
<item:minecraft:dirt> * 3
```



## Properties

| 名称             | Type                                                       | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                        | true       | false      |
| burnTime       | int                                                        | true       | true       |
| damage         | int                                                        | true       | false      |
| damageable     | boolean型                                                   | true       | false      |
| damaged        | boolean型                                                   | true       | false      |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)     | true       | false      |
| displayName    | string                                                     | true       | false      |
| empty          | boolean型                                                   | true       | false      |
| food           | [MCFood](/vanilla/api/food/MCFood)                         | true       | true       |
| getOrCreate    | [IData](/vanilla/api/data/IData)                           | true       | false      |
| getRepairCost  | int                                                        | true       | false      |
| hasDisplayName | boolean型                                                   | true       | false      |
| hasEffect      | boolean型                                                   | true       | false      |
| hasTag         | boolean型                                                   | true       | false      |
| isCrossbow     | boolean型                                                   | true       | false      |
| isEnchantable  | boolean型                                                   | true       | false      |
| isEnchanted    | boolean型                                                   | true       | false      |
| maxDamage      | int                                                        | true       | false      |
| maxStackSize   | int                                                        | true       | false      |
| owner          | string                                                     | true       | false      |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| stackable      | boolean型                                                   | true       | false      |
| tag            | [IData](/vanilla/api/data/IData)                           | true       | false      |
| translationKey | string                                                     | true       | false      |
| useDuration    | int                                                        | true       | false      |

