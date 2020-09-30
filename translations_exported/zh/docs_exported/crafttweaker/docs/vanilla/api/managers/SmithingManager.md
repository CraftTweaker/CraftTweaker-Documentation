# SmithingManager



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinstruer.api.SmithingManager
```

## 已实现的接口
SmithingManager 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
smithing.addJSONRecipe(name as String, data as craftbiner.api.data.IData);
smithing.addJSONRecipe("recipe_name", {component:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                                                     | 描述                              |
| ---- | ------------------------------------------------------ | ------------------------------- |
| name | String                                                 | name of the recipe              |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

将配方添加到烟花桌上。

```zenscript
smithing.addRecipe(RecipeName as String, result as craftbiner.api.item.IItemStack, base as craftwiner.api.item.IIngredient, addition as craftweeper.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| 参数         | 类型                                                                  | 描述          |
| ---------- | ------------------------------------------------------------------- | ----------- |
| recipeName | String                                                              | 配方名称。       |
| result     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 该配方创建的物品。   |
| 基数         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 该配方的初始成分。   |
| 添加         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 该项目添加到基本项目。 |


### getRecipeByName

返回类型： [craftbiner.api.配方。WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByname(名称为字符串)；
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | String | No description provided |


### getRecipesBy输出

返回类型：列表&lt;[craftbinstrues.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(输出为 craftweeper.api.item.IIngredient);
```

| 参数         | 类型                                                                  | 描述                      |
| ---------- | ------------------------------------------------------------------- | ----------------------- |
| output（输出） | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
smithing.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
smithing.removeByModed(modand as String);
smithing.removeByModed("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | String | modid of the recipes to remove |



通过添加排除检查，删除基于注册表名称的配方，这样除了指定的几个选项之外，您可以删除整个模组。

```zenscript
smithing.removeByModed(modid as String, exclusion as craftweapi.recipe.RecipeFilter);
smithing.removeByModed("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                                              | 描述                             |
| ----- | --------------------------------------------------------------- | ------------------------------ |
| modid | String                                                          | modid of the recipes to remove |
| 不包含   | [制作器.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

```zenscript
smithing.removeByname(名称为字符串);
smithing.removeByname("minecraft:furchace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | String | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

```zenscript
smithing.removeRecipe(输出为 craftbiner.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述                   |
| ---------- | ----------------------------------------------------------------- | -------------------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## 参数

| 名称            | 类型     | 可获得  | 可设置   |
| ------------- | ------ | ---- | ----- |
| commandString | String | true | false |

