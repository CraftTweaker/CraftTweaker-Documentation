# CraftingTableManager #工作台合成表管理



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CraftingTableManager;
```


## 已实现的接口
CraftingTableManager实现了以下接口。 That means all methods defined in these interfaces are also available in CraftingTableManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法

### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

Return Type: void

```zenscript
CraftingTableManager.addJSONRecipe(name as string, data as IData) as void
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                               | 描述                              |
| ---- | -------------------------------- | ------------------------------- |
| name | string                           | name of the recipe              |
| data | [IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                               | 描述                                                                                                     | 可选    | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | false |              |
| output（输出）     | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | false |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | false |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true  |              |

### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShapedMirrored(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                               | 描述                                                                                                     | 可选    | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | false |              |
| output（输出）     | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | false |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | false |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true  |              |

### addShapeless

Adds a shapeless recipe to the crafting table

Return Type: void

```zenscript
CraftingTableManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray) as void
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:items:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                             | 描述                                                                                                   | 可选    | DefaultValue |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----- | ------------ |
| recipeName     | string                                                         | name of the recipe to add.                                                                           | false |              |
| output（输出）     | [IItemStack](/vanilla/api/items/IItemStack)                    | output [IItemStack](/vanilla/api/items/IItemStack)                                                   | false |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[]                | array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                                    | false |              |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) for more advanced conditions | true  |              |

### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CraftingTableManager.getAllRecipes() as stdlib.List<WrapperRecipe>
craftingTable.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CraftingTableManager.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


### getRecipesBy输出

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CraftingTableManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
CraftingTableManager.removeAll() as void
craftingTable.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
CraftingTableManager.removeByModid(modid as string) as void
craftingTable.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
CraftingTableManager.removeByModid(modid as string, exclude as RecipeFilter) as void
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                             |
| ----- | ------------------------------------------------ | ------------------------------ |
| modid | string                                           | modid of the recipes to remove |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
CraftingTableManager.removeByName(name as string) as void
craftingTable.removeByName("minecraft:furnace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
CraftingTableManager.removeByRegex(regex as string) as void
craftingTable.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | string | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

Return Type: void

```zenscript
CraftingTableManager.removeRecipe(output as IItemStack) as void
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



