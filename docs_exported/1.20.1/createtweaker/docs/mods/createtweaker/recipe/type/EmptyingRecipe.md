# EmptyingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.EmptyingRecipe;
```


## Extending ProcessingRecipe

EmptyingRecipe extends [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe) are also available in EmptyingRecipe

## Methods

:::group{name=getResultingFluid}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// EmptyingRecipe.getResultingFluid() as IFluidStack

myEmptyingRecipe.getResultingFluid();
```

:::


## Properties

|      Name      |                     Type                      | Has Getter | Has Setter |
|----------------|-----------------------------------------------|------------|------------|
| resultingFluid | [IFluidStack](/vanilla/api/fluid/IFluidStack) | true       | false      |

