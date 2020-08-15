# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## メソッド
### clearCustomName

ItemStackに設定されているカスタムネームを取り除きます。

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                                        |
| ----- | ----------------------------------------------------------------- | ----------------------------------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### 一致

Does the given stack match the ingredient?

Returns boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

ItemStackに表示される名前を設定します。

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| パラメータ | タイプ  | 説明          |
| ----- | ---- | ----------- |
| 名前    | 文字列型 | stackの新しい名前 |


### withDamage

ItemStackのダメージ(耐久値)を設定します。

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| パラメータ | タイプ | 説明        |
| ----- | --- | --------- |
| ダメージ  | int | 新しいダメージの値 |


### withTag

ItemStackのタグを設定します。

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| パラメータ | タイプ                                                    | 説明    |
| ----- | ------------------------------------------------------ | ----- |
| タグ    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | タグを設定 |



## プロパティ

| 名称             | タイプ                                                                 | Has Getter | Has Setter |
| -------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| 金額             | int                                                                 | true       | false      |
| burnTime       | int                                                                 | true       | true       |
| commandString  | 文字列型                                                                | true       | false      |
| damageable     | boolean型                                                            | true       | false      |
| damaged        | boolean型                                                            | true       | false      |
| displayName    | 文字列型                                                                | true       | false      |
| 空              | boolean型                                                            | true       | false      |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true       | true       |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| getRepairCost  | int                                                                 | true       | false      |
| hasDisplayName | boolean型                                                            | true       | false      |
| hasEffect      | boolean型                                                            | true       | false      |
| hasTag         | boolean型                                                            | true       | false      |
| isCrossbow     | boolean型                                                            | true       | false      |
| isEnchantable  | boolean型                                                            | true       | false      |
| isEnchanted    | boolean型                                                            | true       | false      |
| 項目             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |
| maxDamage      | int                                                                 | true       | false      |
| maxStackSize   | int                                                                 | true       | false      |
| registryName   | 文字列型                                                                | true       | false      |
| stackable      | boolean型                                                            | true       | false      |
| タグ             | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true       | false      |
| translationKey | 文字列型                                                                | true       | false      |
| useDuration    | int                                                                 | true       | false      |

## 演算子
### MUL

ItemStackの数量(スタック数)を設定します。

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| パラメータ | タイプ | 説明         |
| ----- | --- | ---------- |
| 金額    | int | new amount |

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | true        |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | false       |

