# StoneCutterManager



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.StoneCutterManager;
```


## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## Methoden

### addRecipe

Adds a recipe to the stone cutter

Return Type: void

```zenscript
StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```
| Parameter  | Type                                          | Beschreibung                                        |
| ---------- | --------------------------------------------- | --------------------------------------------------- |
| recipeName | string                                        | name of the recipe                                  |
| output     | [IItemStack](/vanilla/api/items/IItemStack)   | output [IItemStack](/vanilla/api/items/IItemStack)  |
| input      | [IIngredient](/vanilla/api/items/IIngredient) | input [IIngredient](/vanilla/api/items/IIngredient) |


