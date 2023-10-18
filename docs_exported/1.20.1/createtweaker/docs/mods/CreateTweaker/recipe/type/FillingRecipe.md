# FillingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.FillingRecipe;
```


## Extending ProcessingRecipe

FillingRecipe extends [ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/CreateTweaker/recipe/type/ProcessingRecipe) are also available in FillingRecipe

## Implemented Interfaces
FillingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in FillingRecipe

- [IAssemblyRecipe](/mods/CreateTweaker/recipe/type/IAssemblyRecipe)

## Methods

:::group{name=getRequiredFluid}

Return Type: [FluidIngredient](/mods/CreateTweaker/FluidIngredient)

```zenscript
// FillingRecipe.getRequiredFluid() as FluidIngredient

myFillingRecipe.getRequiredFluid();
```

:::


## Properties

|     Name      |                          Type                          | Has Getter | Has Setter |
|---------------|--------------------------------------------------------|------------|------------|
| requiredFluid | [FluidIngredient](/mods/CreateTweaker/FluidIngredient) | true       | false      |

