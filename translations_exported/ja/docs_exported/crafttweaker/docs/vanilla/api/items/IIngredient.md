# IIngredient

This is IIngredient!!!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IIngredient
```

## Implemented Interfaces
IIngredientのimplementsでは、以下のようなインターフェースで実装されています。 That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### anyDamage

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyDamage();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter    | Type                                                              | Description        |
| ------------ | ----------------------------------------------------------------- | ------------------ |
| stack        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |
| ignoreDamage | boolean型                                                          | 損傷を確認する必要がありますか？   |


### onlyDamaged

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description             | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | No description provided | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`        |



## Properties

| 名称            | Type                                                                | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                              | true       | false      |
| items         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |

## 演算子
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

