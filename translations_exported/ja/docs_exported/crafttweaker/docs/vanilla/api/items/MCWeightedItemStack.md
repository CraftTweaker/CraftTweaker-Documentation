# MCWeightedItemStack

ItemStack は、通常レシピ出力に使用されます。 <p> WeightedStack を作成するために使用されたスタックが変更可能であれば、サイズ設定者は元のスタックも変更します!

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## 実装されたインターフェース
MCWeightedItemStack は、以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
weightedItemStackを手動で作成します。 通常、IItemStackの演算子または `.weight(weight)` メソッドを使用できますが、
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| パラメータ     | タイプ                                                               | 説明                      |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | スタック                    |
| 重量        | double                                                            | 0 (0%)から1 (100%)の間のチャンス |



## メソッド
### 重量

指定された重みを持つ新しい重み付きスタックを作成します

 戻り値: `新しいWeightedItemStack`

戻り値の型: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| パラメータ | タイプ    | 説明 |
| ----- | ------ | -- |
| 新しい重量 | double | 割合 |



## プロパティー

| 名称            | タイプ                                                               | ゲッターあり | セッターあり |
| ------------- | ----------------------------------------------------------------- | ------ | ------ |
| commandString | 文字列型                                                              | true   | false  |
| スタック          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true   | false  |
| 重量            | double                                                            | true   | false  |

## 演算子
### MUL

アイテムスタックの量を設定します。 <p> 元のスタックが変更可能であれば、元のスタックのサイズも変更されます。

 戻り値: `新しいWeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| パラメータ     | タイプ | 説明         |
| --------- | --- | ---------- |
| newAmount | int | 新しいスタックサイズ |
### MOD

与えられたパーセンテージで新しい重み付きスタックを作成します

 戻り値: `新しいWeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| パラメータ | タイプ | 説明 |
| ----- | --- | -- |
| 新しい重量 | int | 割合 |

