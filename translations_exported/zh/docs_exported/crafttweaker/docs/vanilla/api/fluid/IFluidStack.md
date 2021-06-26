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

| 结果类型                                                  | 是否隐藏 |
| ----------------------------------------------------- | ---- |
| [FluidIngredient](/vanilla/api/fluid/FluidIngredient) | true |
| [MCFluid](/vanilla/api/fluid/MCFluid)                 | true |

## 方法

:::group{name=asImmutable}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asImmutable() as IFluidStack

myIFluidStack.asImmutable();
```

:::

:::group{name=containsOther}

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Returns: true if this fluid contains the other fluid  
Return Type: boolean

```zenscript
IFluidStack.containsOther(other as IFluidStack) as boolean
```

| 参数    | 类型                                            | 描述                                   |
| ----- | --------------------------------------------- | ------------------------------------ |
| other | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Returns: A new stack, that contains the same info as this one  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.copy() as IFluidStack

myIFluidStack.copy();
```

:::

:::group{name=getTag}

Returns the NBT tag attached to this FluidStack.

Returns: IData of the FluidStack's NBT Tag, null if it doesn't exist.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// IFluidStack.getTag() as IData

myIFluidStack.getTag();
```

:::

:::group{name=isImmutable}

Return Type: boolean

```zenscript
// IFluidStack.isImmutable() as boolean

myIFluidStack.isImmutable();
```

:::

:::group{name=mutable}

Makes this stack mutable

Returns: A new Stack, that is mutable.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.mutable() as IFluidStack

myIFluidStack.mutable();
```

:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Returns: A new stack, or this stack, depending if this stack is mutable  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.setAmount(amount as int) as IFluidStack

myIFluidStack.setAmount(1000);
```

| 参数     | 类型  | 描述                                |
| ------ | --- | --------------------------------- |
| amount | int | The amount to multiply this stack |


:::

:::group{name=withTag}

Sets the tag for the FluidStack.

Returns: This FluidStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.withTag(tag as IData) as IFluidStack

myIFluidStack.withTag({Display: {lore: ["Hello"]}});
```

| 参数  | 类型                               | 描述              |
| --- | -------------------------------- | --------------- |
| tag | [IData](/vanilla/api/data/IData) | The tag to set. |


:::


## 运算符

:::group{name=CONTAINS}

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

```zenscript
other as IFluidStack in myIFluidStack
```

:::

:::group{name=MUL}

Sets the fluid amount in MilliBuckets (MB)

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

:::

:::group{name=OR}

```zenscript
myIFluidStack | other as FluidIngredient
```

:::


## 参数

| 名称            | 类型                                                         | 可获得  | 可设置   | 描述                                                               |
| ------------- | ---------------------------------------------------------- | ---- | ----- | ---------------------------------------------------------------- |
| amount        | int                                                        | true | false | Gets the fluid amount in MilliBuckets (mB).                      |
| commandString | string                                                     | true | false | Returns the BEP to get this thingy                               |
| empty         | boolean                                                    | true | false | Gets whether or not this fluid stack is empty.                   |
| fluid         | [MCFluid](/vanilla/api/fluid/MCFluid)                      | true | false | Retrieves this fluid stack's fluid.                              |
| hasTag        | boolean                                                    | true | false | Returns true if this FluidStack has a Tag                        |
| isImmutable   | boolean                                                    | true | false | No Description Provided                                          |
| registryName  | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false | Gets the registry name for the fluid this stack is representing. |
| tag           | [IData](/vanilla/api/data/IData)                           | true | false | Returns the NBT tag attached to this FluidStack.                 |

