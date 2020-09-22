# IItemStack

This represents an item. アイテムBEPを使用して取得できます。 Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.item.IItemStack
```

## 実装されたインターフェース
IItemStack は、以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## メソッド
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(crafttweaker.api.util.text.MCTextComponent, crafttweaker.api.util.text.MCTextComponent);
```

| パラメータ       | タイプ                                                                                  | 説明           | IsOptional | デフォルト値 |
| ----------- | ------------------------------------------------------------------------------------ | ------------ | ---------- | ------ |
| コンテンツ       | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません | false      | `null` |
| showMessage | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません | true       | `null` |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(crafttweaker.api.util.text.MCTextComponent);
```

| パラメータ | タイプ                                                                                  | 説明           |
| ----- | ------------------------------------------------------------------------------------ | ------------ |
| コンテンツ | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません |


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

### コピー

コピーを作成

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

この材料スタックでクラフトが行われると、グリッド上になにが残るか？ ただし、スタックが一致するかどうかのチェックは行いません！ Craft Tweakerでの使用例,

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明                |
| ----- | ----------------------------------------------------------------- | ----------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | この成分を提供するためのスタック。 |


### 一致

指定されたスタックは成分と一致しますか?

戻り値の型: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| パラメータ | タイプ                                                               | 説明         |
| ----- | ----------------------------------------------------------------- | ---------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック |



指定されたスタックは成分と一致しますか?

戻り値の型: boolean

```zenscript
<item:minecraft:dirt>.matches(crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| パラメータ        | タイプ                                                               | 説明               |
| ------------ | ----------------------------------------------------------------- | ---------------- |
| スタック         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | チェックするスタック       |
| ignoreDamage | boolean型                                                          | 損傷を確認する必要がありますか？ |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(crafttweaker.api.item.tooltip.ITooltipFunction);
```

| パラメータ | タイプ                                                                                               | 説明           |
| ----- | ------------------------------------------------------------------------------------------------- | ------------ |
| 関数    | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | 説明が提供されていません |


### ミュータブル

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### のみ破損しました

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

戻り値の型: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| パラメータ | タイプ                                                                                                     | 説明           | IsOptional | デフォルト値 |
| ----- | ------------------------------------------------------------------------------------------------------- | ------------ | ---------- | ------ |
| uid   | 文字列型                                                                                                    | 説明が提供されていません | false      | `null` |
| 関数    | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | 説明が提供されていません | true       | `null` |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| Regex | 文字列型 | 説明が提供されていません |


### setDisplayName

ItemStackに表示される名前を設定します。

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| パラメータ | タイプ  | 説明          |
| ----- | ---- | ----------- |
| 名前    | 文字列型 | stackの新しい名前 |


### 重量

戻り値の型: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(weight as double);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 重量    | double | 説明が提供されていません |


### withDamage

ItemStackのダメージ(耐久値)を設定します。

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| パラメータ | タイプ | 説明        |
| ----- | --- | --------- |
| ダメージ  | int | 新しいダメージの値 |


### タグで表示

ItemStackのタグを設定します。

 戻り値: `このitemStack が変更可能な場合、変更されたプロパティを持つ新しいもの、それ以外の場合は`

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({lore: ["Hello"]}});
```

| パラメータ | タイプ                                                    | 説明    |
| ----- | ------------------------------------------------------ | ----- |
| タグ    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | タグを設定 |



## プロパティー

| 名称             | タイプ                                                                 | ゲッターあり | セッターあり |
| -------------- | ------------------------------------------------------------------- | ------ | ------ |
| 金額             | int                                                                 | true   | false  |
| burnTime       | int                                                                 | true   | true   |
| commandString  | 文字列型                                                                | true   | false  |
| ダメージ           | int                                                                 | true   | false  |
| damageable     | boolean型                                                            | true   | false  |
| 損傷しています        | boolean型                                                            | true   | false  |
| displayName    | 文字列型                                                                | true   | false  |
| 空              | boolean型                                                            | true   | false  |
| 食べ物            | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true   | true   |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true   | false  |
| getRepairCost  | int                                                                 | true   | false  |
| hasDisplayName | boolean型                                                            | true   | false  |
| hasEffect      | boolean型                                                            | true   | false  |
| hasTag         | boolean型                                                            | true   | false  |
| isCrossbow     | boolean型                                                            | true   | false  |
| isEnchantable  | boolean型                                                            | true   | false  |
| isEnchanted    | boolean型                                                            | true   | false  |
| 項目             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true   | false  |
| maxDamage      | int                                                                 | true   | false  |
| maxStackSize   | int                                                                 | true   | false  |
| 所有者            | 文字列型                                                                | true   | false  |
| registryName   | 文字列型                                                                | true   | false  |
| スタック可能         | boolean型                                                            | true   | false  |
| タグ             | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true   | false  |
| translationKey | 文字列型                                                                | true   | false  |
| useDuration    | int                                                                 | true   | false  |

## 演算子
### MUL

ItemStackの数量(スタック数)を設定します。

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| パラメータ | タイプ | 説明    |
| ----- | --- | ----- |
| 金額    | int | 新しい金額 |
### MOD

```zenscript
<item:minecraft:dirt> % percentage as int
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| パーセント | int | 説明が提供されていません |
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

