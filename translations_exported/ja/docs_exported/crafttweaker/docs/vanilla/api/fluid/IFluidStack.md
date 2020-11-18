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
### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

Return type: boolean

```zenscript
myIFluidStack.containsOther(other as crafttweaker.api.fluid.IFluidStack);
```

| Parameter | Type                                                                 | Description                          |
| --------- | -------------------------------------------------------------------- | ------------------------------------ |
| other     | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy

Copies the stack. Only needed when mutable stacks are involved.

 Returns: `A new stack, that contains the same info as this one`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### ミュータブル

Makes this stack mutable

 Returns: `A new Stack, that is mutable.`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Sets the fluid amount in MilliBuckets (mB)

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description                       |
| --------- | ---- | --------------------------------- |
| amount    | int  | The amount to multiply this stack |



## Properties

| 名称            | Type                                                                             | Has Getter | Has Setter |
| ------------- | -------------------------------------------------------------------------------- | ---------- | ---------- |
| amount        | int                                                                              | true       | false      |
| commandString | String                                                                           | true       | false      |
| empty         | boolean型                                                                         | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true       | false      |
| registryName  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |

## 演算子
### MUL

Sets the fluid amount in MilliBuckets (MB)

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| Parameter | Type | Description                       |
| --------- | ---- | --------------------------------- |
| amount    | int  | The amount to multiply this stack |
### CONTAINS

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

```zenscript
myIFluidStack in other as crafttweaker.api.fluid.IFluidStack
```

| Parameter | Type                                                                 | Description                          |
| --------- | -------------------------------------------------------------------- | ------------------------------------ |
| other     | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |

