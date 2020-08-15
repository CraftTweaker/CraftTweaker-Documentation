# IIngredient

これはIIngredient!!!

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
craftweaker.api.item.IIngredient
```

## 実装されたインターフェース
IIngredientのimplementsでは、以下のようなインターフェースで実装されています。 つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

戻り値 [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                |
| ----- | ----------------------------------------------------------------- | ----------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | この成分を提供するためのスタック。 |


### 一致

指定されたスタックは成分と一致しますか?

戻り値ブール値

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明         |
| ----- | ----------------------------------------------------------------- | ---------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック |



## プロパティー

| 名称            | タイプ                                                                 | ゲッターあり | セッターあり |
| ------------- | ------------------------------------------------------------------- | ------ | ------ |
| commandString | 文字列型                                                                | true   | false  |
| 項目            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true   | false  |

## キャスト

| 結果の種類                                                      | 暗黙的  |
| ---------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true |

