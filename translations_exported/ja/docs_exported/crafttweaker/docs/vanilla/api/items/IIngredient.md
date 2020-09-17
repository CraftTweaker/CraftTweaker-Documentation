# IIngredient

これはIIngredient!!!

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
craftweaker.api.item.IIngredient
```

## 実装されたインターフェース
IIngredientのimplementsでは、以下のようなインターフェースで実装されています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### anyDamage

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyDamage();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                |
| ----- | ----------------------------------------------------------------- | ----------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | この成分を提供するためのスタック。 |


### 一致

指定されたスタックは成分と一致しますか?

戻り値の型: boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明         |
| ----- | ----------------------------------------------------------------- | ---------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック |



指定されたスタックは成分と一致しますか?

戻り値の型: boolean

```zenscript
<tag:ingotIron>.matches(crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| パラメータ        | タイプ                                                               | 説明               |
| ------------ | ----------------------------------------------------------------- | ---------------- |
| スタック         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック       |
| ignoreDamage | boolean型                                                          | 損傷を確認する必要がありますか？ |


### のみ破損しました

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| パラメータ | タイプ                                                                                                     | 説明           | IsOptional | デフォルト値 |
| ----- | ------------------------------------------------------------------------------------------------------- | ------------ | ---------- | ------ |
| uid   | 文字列型                                                                                                    | 説明が提供されていません | false      | `null` |
| 関数    | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | 説明が提供されていません | true       | `null` |



## プロパティー

| 名称            | タイプ                                                                 | ゲッターあり | セッターあり |
| ------------- | ------------------------------------------------------------------- | ------ | ------ |
| commandString | 文字列型                                                                | true   | false  |
| 項目            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true   | false  |

## 演算子
### OR

```zenscript
<tag:ingotIron> | crafttweaker.api.item.IIngredient
```

| パラメータ | タイプ                                                                | 説明           |
| ----- | ------------------------------------------------------------------ | ------------ |
| その他   | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 説明が提供されていません |

## キャスト

| 結果の種類                                                      | 暗黙的  |
| ---------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true |

