# MCWeightedItemStack

ItemStack は、通常レシピ出力に使用されます。 <p> WeightedStack を作成するために使用されたスタックが変更可能であれば、サイズ設定者は元のスタックも変更します!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack は、以下のインターフェイスを実装しています。 That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

weightedItemStackを手動で作成します。 通常、IItemStackの演算子または `.weight(weight)` メソッドを使用できますが、
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | スタック                    |
| weight    | double                                      | 0 (0%)から1 (100%)の間のチャンス |


## Methods

### weight

指定された重みを持つ新しい重み付きスタックを作成します

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| 新しい重量     | double | 割合          |


## 演算子

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

アイテムスタックの量を設定します。 <p> 元のスタックが変更可能であれば、元のスタックのサイズも変更されます。

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| 名称     | Type                                        | Has Getter | Has Setter |
| ------ | ------------------------------------------- | ---------- | ---------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight | double                                      | true       | false      |

