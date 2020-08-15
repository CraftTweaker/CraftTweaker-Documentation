# MCTag

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.tag.MCTag
```

## 実装されたインターフェース
MCTag は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## メソッド
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| パラメータ | タイプ                                                             | 説明           |
| ----- | --------------------------------------------------------------- | ------------ |
| ブロック  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | 説明が提供されていません |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| パラメータ  | タイプ                                                                          | 説明           |
| ------ | ---------------------------------------------------------------------------- | ------------ |
| エンティティ | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | 説明が提供されていません |


### addItems

```zenscript
myMCTag.addItems(crafttweaker.api.item.IItemStack[]);
```

| パラメータ | タイプ                                                                 | 説明           |
| ----- | ------------------------------------------------------------------- | ------------ |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | 説明が提供されていません |


### createBlockTag

戻り値 [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

戻り値 [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

戻り値 [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                |
| ----- | ----------------------------------------------------------------- | ----------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | この成分を提供するためのスタック。 |


### 一致

指定されたスタックは成分と一致しますか?

戻り値ブール値

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明         |
| ----- | ----------------------------------------------------------------- | ---------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック |


### ブロックを削除

```zenscript
myMCTag.removeBlocks(block as crafttweaker.api.block.MCBlock[]);
```

| パラメータ | タイプ                                                             | 説明           |
| ----- | --------------------------------------------------------------- | ------------ |
| ブロック  | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | 説明が提供されていません |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| パラメータ  | タイプ                                                                          | 説明           |
| ------ | ---------------------------------------------------------------------------- | ------------ |
| エンティティ | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | 説明が提供されていません |


### アイテムを削除

```zenscript
myMCTag.removeItems(crafttweaker.api.item.IItemStack[]);
```

| パラメータ | タイプ                                                                 | 説明           |
| ----- | ------------------------------------------------------------------- | ------------ |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | 説明が提供されていません |



## プロパティー

| 名称            | タイプ                                                                          | ゲッターあり | セッターあり |
| ------------- | ---------------------------------------------------------------------------- | ------ | ------ |
| ブロック          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true   | false  |
| commandString | 文字列型                                                                         | true   | false  |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true   | false  |
| 項目            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true   | false  |

## キャスト

| 結果の種類                                                      | 暗黙的  |
| ---------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true |

