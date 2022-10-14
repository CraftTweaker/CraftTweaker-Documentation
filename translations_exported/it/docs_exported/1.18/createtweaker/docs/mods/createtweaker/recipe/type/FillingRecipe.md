# FillingRecipe

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.FillingRecipe;
```


## Extending ProcessingRecipe

FillingRecipe extends [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe) are also available in FillingRecipe

## Interfacce Implementate
FillingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in FillingRecipe

- [IAssemblyRecipe](/mods/createtweaker/recipe/type/IAssemblyRecipe)

## Metodi

:::group{name=getRequiredFluid}

Return Type: [FluidIngredient](/mods/createtweaker/FluidIngredient)

```zenscript
// FillingRecipe.getRequiredFluid() as FluidIngredient

myFillingRecipe.getRequiredFluid();
```

:::


## Proprietà

| Nome          | Tipo                                                   | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------------------------------------------------------ | --------- | --------- | ----------------------- |
| requiredFluid | [FluidIngredient](/mods/createtweaker/FluidIngredient) | sì        | no        | No Description Provided |

