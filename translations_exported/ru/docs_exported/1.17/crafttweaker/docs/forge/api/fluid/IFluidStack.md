# IFluidStack

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## Implemented Interfaces
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Утилиты

| Тип результата                                      | Является неявным |
| --------------------------------------------------- | ---------------- |
| [Fluid](/vanilla/api/fluid/Fluid)                   | true             |
| [FluidIngredient](/forge/api/fluid/FluidIngredient) | true             |

## Методы

:::group{name=asImmutable}

Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

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

| Параметр | Тип                                         | Описание                             |
| -------- | ------------------------------------------- | ------------------------------------ |
| other    | [IFluidStack](/forge/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Returns: A new stack, that contains the same info as this one  
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// IFluidStack.copy() as IFluidStack

myIFluidStack.copy();
```

:::

:::group{name=getTag}

Returns the NBT tag attached to this FluidStack.

Returns: MapData of the FluidStack's NBT Tag, null if it doesn't exist.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// IFluidStack.getTag() as MapData

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
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// IFluidStack.mutable() as IFluidStack

myIFluidStack.mutable();
```

:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Returns: A new stack, or this stack, depending if this stack is mutable  
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// IFluidStack.setAmount(amount as int) as IFluidStack

myIFluidStack.setAmount(1000);
```

| Параметр | Тип | Описание                          |
| -------- | --- | --------------------------------- |
| amount   | int | The amount to multiply this stack |


:::

:::group{name=withTag}

Sets the tag for the FluidStack.

Returns: This FluidStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// IFluidStack.withTag(tag as MapData) as IFluidStack

myIFluidStack.withTag({Display: {lore: ["Hello"]}});
```

| Параметр | Тип                                  | Описание        |
| -------- | ------------------------------------ | --------------- |
| tag      | [MapData](/vanilla/api/data/MapData) | The tag to set. |


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

:::group{name=OR}

```zenscript
myIFluidStack | other as FluidIngredient
```

:::


## Свойства

| Название      | Тип                                                        | Имеет Getter | Имеет Setter | Описание                                                         |
| ------------- | ---------------------------------------------------------- | ------------ | ------------ | ---------------------------------------------------------------- |
| amount        | int                                                        | true         | false        | Gets the fluid amount in MilliBuckets (mB).                      |
| commandString | string                                                     | true         | false        | Returns the BEP to get this thingy                               |
| empty         | boolean                                                    | true         | false        | Gets whether or not this fluid stack is empty.                   |
| fluid         | [Fluid](/vanilla/api/fluid/Fluid)                          | true         | false        | Retrieves this fluid stack's fluid.                              |
| hasTag        | boolean                                                    | true         | false        | Returns true if this FluidStack has a Tag                        |
| isImmutable   | boolean                                                    | true         | false        | No Description Provided                                          |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true         | false        | Gets the registry name for the fluid this stack is representing. |
| tag           | [MapData](/vanilla/api/data/MapData)                       | true         | false        | Returns the NBT tag attached to this FluidStack.                 |

