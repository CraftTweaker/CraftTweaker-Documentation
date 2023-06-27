# IFluidStack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## Implemented Interfaces
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Static Methods

:::group{name=empty}

Gets the empty IFluidStack

Returns: The empty IFluidStack  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.empty() as IFluidStack

IFluidStack.empty();
```

:::

## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| [Fluid](/vanilla/api/fluid/Fluid)                   | true        |
| [FluidIngredient](/forge/api/fluid/FluidIngredient) | true        |
| [IData](/vanilla/api/data/IData)                    | true        |

## Methods

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// IFluidStack.asIData() as IData

myIFluidStack.asIData();
```

:::

:::group{name=asImmutable}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asImmutable() as IFluidStack

myIFluidStack.asImmutable();
```

:::

:::group{name=asMutable}

Makes this stack mutable

Returns: A new Stack, that is mutable.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asMutable() as IFluidStack

myIFluidStack.asMutable();
```

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

Returns: MapData of the FluidStack's NBT Tag, null if it doesn't exist.  
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

:::group{name=matches}

Checks if this IFluidStack, matches the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Returns: true if this fluid contains the other fluid  
Return Type: boolean

```zenscript
IFluidStack.matches(other as IFluidStack) as boolean
```

| Parameter |                     Type                      |             Description              |
|-----------|-----------------------------------------------|--------------------------------------|
| other     | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Returns: A new stack, or this stack, depending on if this stack is mutable  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.setAmount(amount as int) as IFluidStack

myIFluidStack.setAmount(1000);
```

| Parameter | Type |            Description            |
|-----------|------|-----------------------------------|
| amount    | int  | The amount to multiply this stack |


:::

:::group{name=withTag}

Sets the tag for the FluidStack.

Returns: This FluidStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.withTag(tag as IData?) as IFluidStack

myIFluidStack.withTag({Display: {lore: ["Hello"]}});
```

| Parameter |               Type                |   Description   |
|-----------|-----------------------------------|-----------------|
| tag       | [IData](/vanilla/api/data/IData)? | The tag to set. |


:::


## Operators

:::group{name=CONTAINS}

Checks if this IFluidStack, matches the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

```zenscript
other as IFluidStack in myIFluidStack
```

:::

:::group{name=MUL}

Sets the fluid amount in MilliBuckets (mB)

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


## Properties

|     Name     |                            Type                            | Has Getter | Has Setter |                           Description                            |
|--------------|------------------------------------------------------------|------------|------------|------------------------------------------------------------------|
| amount       | long                                                       | true       | false      | Gets the fluid amount in MilliBuckets (mB).                      |
| empty        | boolean                                                    | true       | false      | Gets whether this fluid stack is empty.                          |
| fluid        | [Fluid](/vanilla/api/fluid/Fluid)                          | true       | false      | Retrieves this fluid stack's fluid.                              |
| hasTag       | boolean                                                    | true       | false      | Returns true if this FluidStack has a Tag                        |
| isImmutable  | boolean                                                    | true       | false      |                                                                  |
| registryName | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      | Gets the registry name for the fluid this stack is representing. |
| tag          | [IData](/vanilla/api/data/IData)                           | true       | false      | Returns the NBT tag attached to this FluidStack.                 |

