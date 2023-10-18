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

Return Type: stdlib.List&lt;[IFluidStack](/vanilla/api/fluid/IFluidStack)&gt;

```zenscript
// FluidIngredient.getMatchingFluidStacks() as stdlib.List<IFluidStack>

myFluidIngredient.getMatchingFluidStacks();
```

:::

:::group{name=getRequiredAmount}

Return Type: long

```zenscript
// FluidIngredient.getRequiredAmount() as long

myFluidIngredient.getRequiredAmount();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
FluidIngredient.test(t as IFluidStack) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| t         | [IFluidStack](/vanilla/api/fluid/IFluidStack) |


:::


## Properties

|        Name         |                               Type                               | Has Getter | Has Setter |
|---------------------|------------------------------------------------------------------|------------|------------|
| matchingFluidStacks | stdlib.List&lt;[IFluidStack](/vanilla/api/fluid/IFluidStack)&gt; | true       | false      |
| requiredAmount      | long                                                             | true       | false      |

