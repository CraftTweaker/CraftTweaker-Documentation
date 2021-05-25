# IFluidStack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## Implemented Interfaces
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [FluidIngredient](/vanilla/api/fluid/FluidIngredient) | true |
| [MCFluid](/vanilla/api/fluid/MCFluid) | true |

## Methods

:::group{name=asImmutable}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asImmutable() as IFluidStack

myIFluidStack.asImmutable();
```

:::

:::group{name=containsOther}

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Return Type: boolean

```zenscript
IFluidStack.containsOther(other as IFluidStack) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.copy() as IFluidStack

myIFluidStack.copy();
```

:::

:::group{name=getTag}

Returns the NBT tag attached to this FluidStack.

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

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.mutable() as IFluidStack

myIFluidStack.mutable();
```

:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.setAmount(amount as int) as IFluidStack

myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | int | The amount to multiply this stack |


:::

:::group{name=withTag}

Sets the tag for the FluidStack.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.withTag(tag as IData) as IFluidStack

myIFluidStack.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | [IData](/vanilla/api/data/IData) | The tag to set. |


:::


## Operators

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


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| amount | int | true | false | Gets the fluid amount in MilliBuckets (mB). |
| commandString | string | true | false | Returns the BEP to get this thingy |
| empty | boolean | true | false | Gets whether or not this fluid stack is empty. |
| fluid | [MCFluid](/vanilla/api/fluid/MCFluid) | true | false | Retrieves this fluid stack's fluid. |
| hasTag | boolean | true | false | Returns true if this FluidStack has a Tag |
| isImmutable | boolean | true | false | No Description Provided |
| registryName | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false | Gets the registry name for the fluid this stack is representing. |
| tag | [IData](/vanilla/api/data/IData) | true | false | Returns the NBT tag attached to this FluidStack. |

