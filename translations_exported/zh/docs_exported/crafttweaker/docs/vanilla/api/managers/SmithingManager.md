# SmithingManager



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.SmithingManager;
```


## 已实现的接口
SmithingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SmithingManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)
## 方法

### addRecipe

Adds a recipe to the smithing table.

Return Type: void

```zenscript
SmithingManager.addRecipe(recipeName as string, result as IItemStack, base as IIngredient, addition as IIngredient) as void
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```
| 参数         | 类型                                                | 描述                                     |
| ---------- | ------------------------------------------------- | -------------------------------------- |
| recipeName | string                                            | Name of the recipe.                    |
| result     | [IItemStack](/vanilla/api/items/IItemStack)       | The item created by the recipe.        |
| base       | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The initial ingredient for the recipe. |
| addition   | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The item added to the base item.       |


