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
| [IData](/vanilla/api/data/IData)                                  | true        |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true        |
| [Ingredient](/vanilla/api/item/Ingredient)                        | true        |
| [ItemStack](/vanilla/api/item/ItemStack)                          | true        |
| [MapData](/vanilla/api/data/MapData)                              | true        |
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


### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.anyDamage() as MCIngredientConditioned<IIngredient>
<item:minecraft:dirt>.anyDamage();
```

### asIIngredientWithAmount

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IItemStack.asIIngredientWithAmount() as IIngredientWithAmount
<item:minecraft:dirt>.asIIngredientWithAmount();
```

### asVanillaIngredient

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
IItemStack.asVanillaIngredient() as Ingredient
<item:minecraft:dirt>.asVanillaIngredient();
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

### contains

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IItemStack.contains(ingredient as IIngredient) as boolean
<item:minecraft:dirt>.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                          | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


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

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.getRemainingItem(stack as IItemStack) as IItemStack
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### isFood

Return Type: boolean

```zenscript
IItemStack.isFood() as boolean
<item:minecraft:dirt>.isFood();
```

### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IItemStack.matches(stack as IItemStack) as boolean
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


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

### only

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.onlyDamaged() as MCIngredientConditioned<IIngredient>
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |

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

### CONTAINS

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIItemStack
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <item:minecraft:dirt>
```



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



### OR

```zenscript
myIItemStack | other as IIngredient
```




## Properties

| 名称             | Type                                                       | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                        | true       | false      |
| burnTime       | int                                                        | true       | true       |
| commandString  | string                                                     | true       | false      |
| damage         | int                                                        | true       | false      |
| damageable     | boolean型                                                   | true       | false      |
| damaged        | boolean型                                                   | true       | false      |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)     | true       | false      |
| displayName    | string                                                     | true       | false      |
| empty          | boolean型                                                   | true       | false      |
| food           | [MCFood](/vanilla/api/food/MCFood)?                        | true       | true       |
| getOrCreate    | [IData](/vanilla/api/data/IData)                           | true       | false      |
| getRepairCost  | int                                                        | true       | false      |
| hasDisplayName | boolean型                                                   | true       | false      |
| hasEffect      | boolean型                                                   | true       | false      |
| hasTag         | boolean型                                                   | true       | false      |
| isCrossbow     | boolean型                                                   | true       | false      |
| isEnchantable  | boolean型                                                   | true       | false      |
| isEnchanted    | boolean型                                                   | true       | false      |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]              | true       | false      |
| maxDamage      | int                                                        | true       | false      |
| maxStackSize   | int                                                        | true       | false      |
| owner          | string                                                     | true       | false      |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| stackable      | boolean型                                                   | true       | false      |
| tag            | [IData](/vanilla/api/data/IData)                           | true       | false      |
| translationKey | string                                                     | true       | false      |
| useDuration    | int                                                        | true       | false      |

