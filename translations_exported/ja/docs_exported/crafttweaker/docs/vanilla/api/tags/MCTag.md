# MCTag

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addFluids

```zenscript
myMCTag.addFluids(crafttweaker.api.fluidとして流体。MCFluid[]);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### addItems

このタグにアイテムを追加すると、アイテムを保持できるタグでない場合は失敗します

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description |
| --------- | ------------------------------------------------------------------- | ----------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | タグに追加するアイテム |


### anyDamage

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### createBlockTag

戻り値の型: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

戻り値の型: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

戻り値の型: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

戻り値の型: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter    | Type                                                              | Description        |
| ------------ | ----------------------------------------------------------------- | ------------------ |
| stack        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |
| ignoreDamage | boolean型                                                          | 損傷を確認する必要がありますか？   |


### onlyDamaged

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description             | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | No description provided | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`        |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description             |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### removeFluids

```zenscript
myMCTag.removeFluids(crafttweaker.api.fluidとして流体。MCFluid[]);
```

| Parameter | Type                                                           | Description             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### removeItems

このタグからアイテムを削除します。アイテムを保持できるタグでない場合は失敗します。

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description  |
| --------- | ------------------------------------------------------------------- | ------------ |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | タグから削除するアイテム |



## Properties

| 名称              | Type                                                                             | Has Getter | Has Setter |
| --------------- | -------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true       | false      |
| commandString   | String                                                                           | true       | false      |
| entityTypes     | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true       | false      |
| firstBlock      | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true       | false      |
| firstEntityType | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true       | false      |
| firstFluid      | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true       | false      |
| firstItem       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true       | false      |
| fluids          | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true       | false      |
| id              | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| isBlockTag      | boolean型                                                                         | true       | false      |
| isEntityTypeTag | boolean型                                                                         | true       | false      |
| isFluidTag      | boolean型                                                                         | true       | false      |
| isItemTag       | boolean型                                                                         | true       | false      |
| items           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true       | false      |

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

