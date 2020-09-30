# MCWeightedItemStack

ItemStack は、通常レシピ出力に使用されます。 <p> WeightedStack を作成するために使用されたスタックが変更可能であれば、サイズ設定者は元のスタックも変更します!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Implemented Interfaces
MCWeightedItemStack は、以下のインターフェイスを実装しています。 That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
weightedItemStackを手動で作成します。 通常、IItemStackの演算子または `.weight(weight)` メソッドを使用できますが、
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | スタック                    |
| weight    | double                                                            | 0 (0%)から1 (100%)の間のチャンス |



## Methods
### weight

指定された重みを持つ新しい重み付きスタックを作成します

 戻り値: `新しいWeightedItemStack`

戻り値の型: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| 新しい重量     | double | 割合          |



## Properties

| 名称            | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

## 演算子
### MUL

アイテムスタックの量を設定します。 <p> 元のスタックが変更可能であれば、元のスタックのサイズも変更されます。

 戻り値: `新しいWeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| newAmount | int  | 新しいスタックサイズ  |
### MOD

与えられたパーセンテージで新しい重み付きスタックを作成します

 戻り値: `新しいWeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| 新しい重量     | int  | 割合          |

