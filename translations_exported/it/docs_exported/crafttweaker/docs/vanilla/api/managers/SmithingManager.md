# SmithingManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.SmithingManager;
```


## Interfacce Implementate
SmithingManager implementa le seguenti interfacce. That means all methods defined in these interfaces are also available in SmithingManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## Methods

### addRecipe

Adds a recipe to the smithing table.

Return Type: void

```zenscript
SmithingManager.addRecipe(recipeName as string, result as IItemStack, base as IIngredient, addition as IIngredient) as void
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```
| Parameter  | Type                                          | Description                            |
| ---------- | --------------------------------------------- | -------------------------------------- |
| recipeName | string                                        | Name of the recipe.                    |
| result     | [IItemStack](/vanilla/api/items/IItemStack)   | The item created by the recipe.        |
| base       | [IIngredient](/vanilla/api/items/IIngredient) | The initial ingredient for the recipe. |
| addition   | [IIngredient](/vanilla/api/items/IIngredient) | The item added to the base item.       |


