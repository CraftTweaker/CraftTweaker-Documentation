# StoneCutterManager



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.StoneCutterManager;
```


## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## Methods

### addRecipe

Adds a recipe to the stone cutter

Return Type: void

```zenscript
StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```
| Parameter | Type | Description |
|-----------|------|-------------|
| recipeName | string | name of the recipe |
| output | [IItemStack](/vanilla/api/items/IItemStack) | output [IItemStack](/vanilla/api/items/IItemStack) |
| input | [IIngredient](/vanilla/api/items/IIngredient) | input [IIngredient](/vanilla/api/items/IIngredient) |

