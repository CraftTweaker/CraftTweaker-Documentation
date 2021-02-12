# BlastFurnaceManager #高炉合成表管理



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.BlastFurnaceManager;
```


## 已实现的接口
BlastFurnaceManager实现了以下接口。 That means all methods defined in these interfaces are also available in BlastFurnaceManager

- [ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 方法

### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

Return Type: void

```zenscript
BlastFurnaceManager.addJSONRecipe(name as string, data as IData) as void
blastFurnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                               | 描述                              |
| ---- | -------------------------------- | ------------------------------- |
| name | string                           | name of the recipe              |
| data | [IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

添加基于给定参数的合成表

Return Type: void

```zenscript
BlastFurnaceManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void
blastFurnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| 参数             | 类型                                                | 描述         |
| -------------- | ------------------------------------------------- | ---------- |
| name           | string                                            | 新的合成表名称    |
| output（输出）     | [IItemStack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id |
| input（输入）      | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 合成表的输入成分   |
| xp             | float                                             | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                               | 烧制需要多长时间   |


### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
BlastFurnaceManager.getAllRecipes() as stdlib.List<WrapperRecipe>
blastFurnace.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
BlastFurnaceManager.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


### getRecipesBy输出

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
BlastFurnaceManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
BlastFurnaceManager.removeAll() as void
blastFurnace.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
BlastFurnaceManager.removeByModid(modid as string) as void
blastFurnace.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
BlastFurnaceManager.removeByModid(modid as string, exclude as RecipeFilter) as void
blastFurnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                             |
| ----- | ------------------------------------------------ | ------------------------------ |
| modid | string                                           | modid of the recipes to remove |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
BlastFurnaceManager.removeByName(name as string) as void
blastFurnace.removeByName("minecraft:furnace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
BlastFurnaceManager.removeByRegex(regex as string) as void
blastFurnace.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | string | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

Return Type: void

```zenscript
BlastFurnaceManager.removeRecipe(output as IItemStack) as void
blastFurnace.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


移除基于输出和输入的合成表

Return Type: void

```zenscript
BlastFurnaceManager.removeRecipe(output as IItemStack, input as IIngredient) as void
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| 参数         | 类型                                                | 描述          |
| ---------- | ------------------------------------------------- | ----------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id. |
| input（输入）  | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 要移除的配方的成分。  |



