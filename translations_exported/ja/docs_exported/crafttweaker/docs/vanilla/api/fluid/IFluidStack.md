# IFluidStack

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStackは以下のインターフェースを実装しています。 That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### copy

スタックをコピーする。 変更可能なスタックが関与している場合にのみ必要です。

 戻り値: `このスタックと同じ情報を含む新しいスタック`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### ミュータブル

このスタックを変更可能にする

 戻り値: `変更可能な新しいスタック。`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

MilliBuckets (MB) に流体量を設定する

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| amount    | int  | このスタックを掛ける量 |



## Properties

| 名称            | Type                                                         | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| commandString | String                                                       | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## 演算子
### MUL

MilliBuckets (MB) に流体量を設定する

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| amount    | int  | このスタックを掛ける量 |

