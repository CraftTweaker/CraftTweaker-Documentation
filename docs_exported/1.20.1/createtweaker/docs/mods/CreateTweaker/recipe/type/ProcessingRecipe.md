# ProcessingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.ProcessingRecipe;
```


## Implemented Interfaces
ProcessingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in ProcessingRecipe

- [Recipe](/vanilla/api/recipe/type/Recipe)&lt;T&gt;

## Methods

:::group{name=getFluidIngredients}

Return Type: stdlib.List&lt;[FluidIngredient](/mods/CreateTweaker/FluidIngredient)&gt;

```zenscript
// ProcessingRecipe.getFluidIngredients() as stdlib.List<FluidIngredient>

myProcessingRecipe.getFluidIngredients();
```

:::

:::group{name=getFluidResults}

Return Type: stdlib.List&lt;[IFluidStack](/vanilla/api/fluid/IFluidStack)&gt;

```zenscript
// ProcessingRecipe.getFluidResults() as stdlib.List<IFluidStack>

myProcessingRecipe.getFluidResults();
```

:::

:::group{name=getProcessingDuration}

Return Type: int

```zenscript
// ProcessingRecipe.getProcessingDuration() as int

myProcessingRecipe.getProcessingDuration();
```

:::

:::group{name=getRequiredHeat}

Return Type: [HeatCondition](/mods/CreateTweaker/recipe/HeatCondition)

```zenscript
// ProcessingRecipe.getRequiredHeat() as HeatCondition

myProcessingRecipe.getRequiredHeat();
```

:::

:::group{name=getRollableResults}

Return Type: stdlib.List&lt;[ProcessingOutput](/mods/CreateTweaker/ProcessingOutput)&gt;

```zenscript
// ProcessingRecipe.getRollableResults() as stdlib.List<ProcessingOutput>

myProcessingRecipe.getRollableResults();
```

:::

:::group{name=getRollableResultsAsItemStacks}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// ProcessingRecipe.getRollableResultsAsItemStacks() as stdlib.List<IItemStack>

myProcessingRecipe.getRollableResultsAsItemStacks();
```

:::

:::group{name=rollResults}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// ProcessingRecipe.rollResults() as stdlib.List<IItemStack>

myProcessingRecipe.rollResults();
```

:::


## Properties

|            Name             |                                    Type                                     | Has Getter | Has Setter |
|-----------------------------|-----------------------------------------------------------------------------|------------|------------|
| fluidIngredients            | stdlib.List&lt;[FluidIngredient](/mods/CreateTweaker/FluidIngredient)&gt;   | true       | false      |
| fluidResults                | stdlib.List&lt;[IFluidStack](/vanilla/api/fluid/IFluidStack)&gt;            | true       | false      |
| processingDuration          | int                                                                         | true       | false      |
| requiredHeat                | [HeatCondition](/mods/CreateTweaker/recipe/HeatCondition)                   | true       | false      |
| rollableResults             | stdlib.List&lt;[ProcessingOutput](/mods/CreateTweaker/ProcessingOutput)&gt; | true       | false      |
| rollableResultsAsItemStacks | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;               | true       | false      |

