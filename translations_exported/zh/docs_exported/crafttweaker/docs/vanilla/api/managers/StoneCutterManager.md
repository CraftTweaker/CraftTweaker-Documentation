# StoneCutterManager



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.StoneCutterManager;
```


## 已实现的接口
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法

### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

Return Type: void

```zenscript
StoneCutterManager.addJSONRecipe(name as string, data as IData) as void
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                               | 描述                              |
| ---- | -------------------------------- | ------------------------------- |
| name | string                           | name of the recipe              |
| data | [IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the stone cutter

Return Type: void

```zenscript
StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| 参数         | 类型                                                | 描述                                                  |
| ---------- | ------------------------------------------------- | --------------------------------------------------- |
| recipeName | string                                            | name of the recipe                                  |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack)       | output [IItemStack](/vanilla/api/items/IItemStack)  |
| input（输入）  | [材料（IIngredient）](/vanilla/api/items/IIngredient) | input [IIngredient](/vanilla/api/items/IIngredient) |


### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
StoneCutterManager.getAllRecipes() as stdlib.List<WrapperRecipe>
stoneCutter.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
StoneCutterManager.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


### getRecipesBy输出

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
StoneCutterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
StoneCutterManager.removeAll() as void
stoneCutter.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
StoneCutterManager.removeByModid(modid as string) as void
stoneCutter.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
StoneCutterManager.removeByModid(modid as string, exclude as RecipeFilter) as void
stoneCutter.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                             |
| ----- | ------------------------------------------------ | ------------------------------ |
| modid | string                                           | modid of the recipes to remove |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
StoneCutterManager.removeByName(name as string) as void
stoneCutter.removeByName("minecraft:furnace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
StoneCutterManager.removeByRegex(regex as string) as void
stoneCutter.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | string | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

Return Type: void

```zenscript
StoneCutterManager.removeRecipe(output as IItemStack) as void
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



