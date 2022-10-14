# FluidIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.FluidIngredient;
```


## Implemented Interfaces
FluidIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in FluidIngredient

- Predicate

## Methods

:::group{name=getMatchingFluidStacks}

Return Type: stdlib.List&lt;[IFluidStack](/forge/api/fluid/IFluidStack)&gt;

```zenscript
// FluidIngredient.getMatchingFluidStacks() as stdlib.List<IFluidStack>

myFluidIngredient.getMatchingFluidStacks();
```

:::

:::group{name=getRequiredAmount}

Return Type: int

```zenscript
// FluidIngredient.getRequiredAmount() as int

myFluidIngredient.getRequiredAmount();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
FluidIngredient.test(t as IFluidStack) as boolean
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| t         | [IFluidStack](/forge/api/fluid/IFluidStack) | No Description Provided |


:::


## Properties

| 이름                  | Type                                                                       | Has Getter | Has Setter | Description             |
| ------------------- | -------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| matchingFluidStacks | stdlib.List&lt;[IFluidStack](/forge/api/fluid/IFluidStack)&gt; | true       | false      | No Description Provided |
| requiredAmount      | int                                                                        | true       | false      | No Description Provided |

