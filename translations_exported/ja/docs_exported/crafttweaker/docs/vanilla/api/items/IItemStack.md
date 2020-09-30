# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(crafttweaker.api.util.text.MCTextComponent, crafttweaker.api.util.text.MCTextComponent);
```

| Parameter   | Type                                                                                 | Description             | IsOptional | Default Value |
| ----------- | ------------------------------------------------------------------------------------ | ----------------------- | ---------- | ------------- |
| コンテンツ       | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided | false      | `null`        |
| showMessage | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided | true       | `null`        |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| コンテンツ     | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### anyDamage

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### clearCustomName

ItemStackに設定されているカスタムネームを取り除きます。

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy

コピーを作成

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter    | Type                                                              | Description        |
| ------------ | ----------------------------------------------------------------- | ------------------ |
| stack        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |
| ignoreDamage | boolean型                                                          | 損傷を確認する必要がありますか？   |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Parameter | Type                                                                                              | Description             |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| function  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | No description provided |


### ミュータブル

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### onlyDamaged

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description             | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | No description provided | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`        |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | String | No description provided |


### setDisplayName

ItemStackに表示される名前を設定します。

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| name      | String | stackの新しい名前 |


### weight

戻り値の型: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(weight as double);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| weight    | double | No description provided |


### withDamage

ItemStackのダメージ(耐久値)を設定します。

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| damage    | int  | 新しいダメージの値   |


### withTag

ItemStackのタグを設定します。

 戻り値: `このitemStack が変更可能な場合、変更されたプロパティを持つ新しいもの、それ以外の場合は`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | タグを設定       |



## Properties

| 名称             | Type                                                                | Has Getter | Has Setter |
| -------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| amount         | int                                                                 | true       | false      |
| burnTime       | int                                                                 | true       | true       |
| commandString  | String                                                              | true       | false      |
| damage         | int                                                                 | true       | false      |
| damageable     | boolean型                                                            | true       | false      |
| damaged        | boolean型                                                            | true       | false      |
| displayName    | String                                                              | true       | false      |
| empty          | boolean型                                                            | true       | false      |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true       | true       |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| getRepairCost  | int                                                                 | true       | false      |
| hasDisplayName | boolean型                                                            | true       | false      |
| hasEffect      | boolean型                                                            | true       | false      |
| hasTag         | boolean型                                                            | true       | false      |
| isCrossbow     | boolean型                                                            | true       | false      |
| isEnchantable  | boolean型                                                            | true       | false      |
| isEnchanted    | boolean型                                                            | true       | false      |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |
| maxDamage      | int                                                                 | true       | false      |
| maxStackSize   | int                                                                 | true       | false      |
| owner          | String                                                              | true       | false      |
| registryName   | String                                                              | true       | false      |
| stackable      | boolean型                                                            | true       | false      |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| translationKey | String                                                              | true       | false      |
| useDuration    | int                                                                 | true       | false      |

## 演算子
### MUL

ItemStackの数量(スタック数)を設定します。

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| amount    | int  | new amount  |
### MOD

```zenscript
<item:minecraft:dirt> % percentage as int
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| パーセント     | int  | No description provided |
### OR

```zenscript
<tag:ingotIron> | crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

