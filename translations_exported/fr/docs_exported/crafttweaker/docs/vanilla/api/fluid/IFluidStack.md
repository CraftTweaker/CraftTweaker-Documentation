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

| Result type                           | Is Implicit |
| ------------------------------------- | ----------- |
| [MCFluid](/vanilla/api/fluid/MCFluid) | true        |

## Methods

### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Return Type: boolean

```zenscript
IFluidStack.containsOther(other as IFluidStack) as boolean
```

| Parameter | Type                                          | Description                          |
| --------- | --------------------------------------------- | ------------------------------------ |
| other     | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy

Copies the stack. Only needed when mutable stacks are involved.

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.copy() as IFluidStack
myIFluidStack.copy();
```

### mutable

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

| Parameter | Type | Description                       |
| --------- | ---- | --------------------------------- |
| amount    | int  | The amount to multiply this stack |



## Operators

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




## Properties

| Name         | Type                                                                  | Has Getter | Has Setter |
| ------------ | --------------------------------------------------------------------- | ---------- | ---------- |
| amount       | int                                                                   | true       | false      |
| empty        | boolean                                                               | true       | false      |
| fluid        | [MCFluid](/vanilla/api/fluid/MCFluid)                                 | true       | false      |
| registryName | [format@@0 MCRessourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |

