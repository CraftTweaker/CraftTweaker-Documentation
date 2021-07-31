# IFluidStack

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## Implemented Interfaces
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Утилиты

| Тип результата                        | Является неявным |
| ------------------------------------- | ---------------- |
| [MCFluid](/vanilla/api/fluid/MCFluid) | true             |

## Methods

:::group{name=containsOther}

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Return Type: boolean

```zenscript
IFluidStack.containsOther(other as IFluidStack) as boolean
```

| Параметр | Тип                                           | Description                          |
| -------- | --------------------------------------------- | ------------------------------------ |
| other    | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.copy() as IFluidStack
myIFluidStack.copy();
```

:::

:::group{name=getTag}

Returns the NBT tag attached to this FluidStack.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
IFluidStack.getTag() as IData
myIFluidStack.getTag();
```

:::

:::group{name=mutable}

Makes this stack mutable

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.mutable() as IFluidStack
myIFluidStack.mutable();
```

:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.setAmount(amount as int) as IFluidStack
myIFluidStack.setAmount(1000);
```

| Параметр | Тип | Description                       |
| -------- | --- | --------------------------------- |
| amount   | int | The amount to multiply this stack |


:::

:::group{name=withTag}

Sets the tag for the FluidStack.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.withTag(tag as IData) as IFluidStack
myIFluidStack.withTag({Display: {lore: ["Hello"]}});
```

| Параметр | Тип                              | Description     |
| -------- | -------------------------------- | --------------- |
| tag      | [IData](/vanilla/api/data/IData) | The tag to set. |


:::


## Операторы

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


## Свойства

| Название      | Тип                                                                      | Имеет Getter | Имеет Setter |
| ------------- | ------------------------------------------------------------------------ | ------------ | ------------ |
| amount        | int                                                                      | true         | false        |
| commandString | string                                                                   | true         | false        |
| empty         | boolean                                                                  | true         | false        |
| fluid         | [MCFluid](/vanilla/api/fluid/MCFluid)                                    | true         | false        |
| hasTag        | boolean                                                                  | true         | false        |
| registryName  | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | true         | false        |
| tag           | [IData](/vanilla/api/data/IData)                                         | true         | false        |

