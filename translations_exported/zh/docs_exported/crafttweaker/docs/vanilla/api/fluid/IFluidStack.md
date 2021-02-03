# IFluidStack

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## 已实现的接口
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)
## Casters

| 结果类型                                  | 是否隐藏 |
| ------------------------------------- | ---- |
| [MCFluid](/vanilla/api/fluid/MCFluid) | true |

## 方法

### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Return Type: boolean

```zenscript
IFluidStack.containsOther(other as IFluidStack) as boolean
```

| 参数    | 类型                                            | 描述                                   |
| ----- | --------------------------------------------- | ------------------------------------ |
| other | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy #复制

Copies the stack. Only needed when mutable stacks are involved.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.copy() as IFluidStack
myIFluidStack.copy();
```

### 可变的

Makes this stack mutable

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.mutable() as IFluidStack
myIFluidStack.mutable();
```

### setAmount

Sets the fluid amount in MilliBuckets (mB)

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.setAmount(amount as int) as IFluidStack
myIFluidStack.setAmount(1000);
```

| 参数     | 类型  | 描述                                |
| ------ | --- | --------------------------------- |
| amount | int | The amount to multiply this stack |



## 运算符

### CONTAINS

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

```zenscript
other as IFluidStack in myIFluidStack
```



### MUL

Sets the fluid amount in MilliBuckets (MB)

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```




## 参数

| 名称           | 类型                                                         | 可获得  | 可设置   |
| ------------ | ---------------------------------------------------------- | ---- | ----- |
| amount       | int                                                        | true | false |
| empty        | boolean                                                    | true | false |
| fluid        | [MCFluid](/vanilla/api/fluid/MCFluid)                      | true | false |
| registryName | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |

