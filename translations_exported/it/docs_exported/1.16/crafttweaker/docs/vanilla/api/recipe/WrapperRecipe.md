# WrapperRecipe

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipes.WrapperRecipe;
```


## Interfacce Implementate
WrapperRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in WrapperRecipe

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi

:::group{name=canFit}

Return Type: boolean

```zenscript
WrapperRecipe.canFit(width as int, height as int) as boolean
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| width     | int  | No Description Provided |
| height    | int  | No Description Provided |


:::

:::group{name=replace}

Return Type: void

```zenscript
WrapperRecipe.replace(from as IIngredient, to as IIngredient) as void
```

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| from      | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |
| to        | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::


## Proprietà

| Nome                      | Tipo                                                                         | Ha Getter | Ha Setter | Descrizione             |
| ------------------------- | ---------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| commandString             | string                                                                       | sì        | no        | No Description Provided |
| dynamic                   | boolean                                                                      | sì        | no        | No Description Provided |
| gruppo                    | string                                                                       | sì        | no        | No Description Provided |
| icon                      | [IItemStack](/vanilla/api/items/IItemStack)                                  | sì        | no        | No Description Provided |
| id                        | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                   | sì        | no        | No Description Provided |
| ingredients               | stdlib.List&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | sì        | no        | No Description Provided |
| isShapedCraftingRecipe    | boolean                                                                      | sì        | no        | No Description Provided |
| isShapelessCraftingRecipe | boolean                                                                      | sì        | no        | No Description Provided |
| output                    | [IItemStack](/vanilla/api/items/IItemStack)                                  | sì        | no        | No Description Provided |
| recipeManager             | [IRecipeManager](/vanilla/api/managers/IRecipeManager)                       | sì        | no        | No Description Provided |

