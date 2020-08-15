# MCTag

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## メソッド
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| パラメータ | タイプ                                                             | 説明                      |
| ----- | --------------------------------------------------------------- | ----------------------- |
| ブロック  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| パラメータ  | タイプ                                                                          | 説明                      |
| ------ | ---------------------------------------------------------------------------- | ----------------------- |
| エンティティ | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| パラメータ | タイプ                                                                 | 説明                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


### createBlockTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                                        |
| ----- | ----------------------------------------------------------------- | ----------------------------------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### 一致

Does the given stack match the ingredient?

Returns boolean

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| パラメータ | タイプ                                                             | 説明                      |
| ----- | --------------------------------------------------------------- | ----------------------- |
| ブロック  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| パラメータ  | タイプ                                                                          | 説明                      |
| ------ | ---------------------------------------------------------------------------- | ----------------------- |
| エンティティ | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| パラメータ | タイプ                                                                 | 説明                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## プロパティー

| 名称            | タイプ                                                                          | Has Getter | Has Setter |
| ------------- | ---------------------------------------------------------------------------- | ---------- | ---------- |
| ブロック          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true       | false      |
| commandString | 文字列型                                                                         | true       | false      |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true       | false      |
| 項目            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true       | false      |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

