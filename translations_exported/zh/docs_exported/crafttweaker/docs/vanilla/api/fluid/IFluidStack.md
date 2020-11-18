# IFluidStack

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## 已实现的接口
IFluidStack 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

Return type: boolean

```zenscript
myIFluidStack.containsOther(other as crafttweaker.api.fluid.IFluidStack);
```

| 参数    | 类型                                                                   | 描述                                   |
| ----- | -------------------------------------------------------------------- | ------------------------------------ |
| other | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy #复制

Copies the stack. Only needed when mutable stacks are involved.

 Returns: `A new stack, that contains the same info as this one`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### 可变的

Makes this stack mutable

 Returns: `A new Stack, that is mutable.`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Sets the fluid amount in MilliBuckets (mB)

 返回： `一个新的堆栈或这个堆栈，取决于这个堆栈是否可变`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| 参数     | 类型  | 描述                                |
| ------ | --- | --------------------------------- |
| amount | int | The amount to multiply this stack |



## 参数

| 名称            | 类型                                                                               | 可获得  | 可设置   |
| ------------- | -------------------------------------------------------------------------------- | ---- | ----- |
| amount        | int                                                                              | true | false |
| commandString | String                                                                           | true | false |
| empty         | boolean                                                                          | true | false |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true | false |
| registryName  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |

## 运算符
### MUL

Sets the fluid amount in MilliBuckets (MB)

 返回： `一个新的堆栈或这个堆栈，取决于这个堆栈是否可变`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| 参数     | 类型  | 描述                                |
| ------ | --- | --------------------------------- |
| amount | int | The amount to multiply this stack |
### CONTAINS

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

```zenscript
myIFluidStack in other as crafttweaker.api.fluid.IFluidStack
```

| 参数    | 类型                                                                   | 描述                                   |
| ----- | -------------------------------------------------------------------- | ------------------------------------ |
| other | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |

