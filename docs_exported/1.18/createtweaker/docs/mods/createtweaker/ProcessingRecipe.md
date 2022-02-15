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

Return Type: stdlib.List

```zenscript
// ProcessingRecipe.getFluidIngredients() as stdlib.List

myProcessingRecipe.getFluidIngredients();
```

:::

:::group{name=getFluidResults}

Return Type: stdlib.List

```zenscript
// ProcessingRecipe.getFluidResults() as stdlib.List

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

Return Type: **invalid**

```zenscript
// ProcessingRecipe.getRequiredHeat() as invalid

myProcessingRecipe.getRequiredHeat();
```

:::

:::group{name=getRollableResults}

Return Type: stdlib.List

```zenscript
// ProcessingRecipe.getRollableResults() as stdlib.List

myProcessingRecipe.getRollableResults();
```

:::

:::group{name=getRollableResultsAsItemStacks}

Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// ProcessingRecipe.getRollableResultsAsItemStacks() as stdlib.List<ItemStack>

myProcessingRecipe.getRollableResultsAsItemStacks();
```

:::

:::group{name=rollResults}

Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// ProcessingRecipe.rollResults() as stdlib.List<ItemStack>

myProcessingRecipe.rollResults();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| fluidIngredients | stdlib.List | true | false | No Description Provided |
| fluidResults | stdlib.List | true | false | No Description Provided |
| processingDuration | int | true | false | No Description Provided |
| requiredHeat | **invalid** | true | false | No Description Provided |
| rollableResults | stdlib.List | true | false | No Description Provided |
| rollableResultsAsItemStacks | stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true | false | No Description Provided |

