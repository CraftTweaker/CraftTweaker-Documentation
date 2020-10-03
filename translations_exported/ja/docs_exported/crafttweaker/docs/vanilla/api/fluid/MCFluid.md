# MCFluid

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implemented Interfaces
MCFluid は以下のインタフェースを実装しています。 That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### makeStack

指定した流体の量で新しい [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) を作成します。

 戻り値: `new (immutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(amount as int);
myMCFluid.makeStack(1000);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |



## Properties

| 名称            | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

## 演算子
### MUL

指定した流体の量で新しい [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) を作成します。

 戻り値: `new (immutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * amount as int
myMCFluid * 1000
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |

