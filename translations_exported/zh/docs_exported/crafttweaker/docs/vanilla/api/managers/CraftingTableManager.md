# CraftingTableManager #工作台合成表管理



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.CraftingTableManager
```

## 已实现的接口
CraftingTableManager实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                                                     | 描述                              |
| ---- | ------------------------------------------------------ | ------------------------------- |
| name | String                                                 | name of the recipe              |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as craftweer.api.item.IItemStack, components as craftwiner.api.item.IIngredient[], recipeFunctionMatrix;
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>], [<tag:minecraft:wool>]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (用作IItemStack, 输入 IItemStack[]) => {if(input[0][0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                                                         | 描述                                                                                                      | 可选的   | Default Value |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ----- | ------------- |
| recipeName     | String                                                                                     | name of the recipe to add.                                                                              | false | `null`        |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                          | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                | false | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                    | [craftmiliter.api.item.IIngredient](/vanilla/api/items/IIngredient) 数组供输入                               | false | `null`        |
| recipeFunction | [craftbinstruer.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | 可选的 [craftbinstruer.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) 用于更高级的条件 | true  | `null`        |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, outcome as craftbiner.api.item.IItemStack, components as craftweeper.api.item.IIngredient[], recipe FunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>[<item:minecraft:diamond>], [<tag:minecraft:wool>]);
craftingTable ddd ShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (用作IItemStack, 输入 IItemStack[]) => {if(input[0][0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                                                         | 描述                                                                                                      | 可选的   | Default Value |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ----- | ------------- |
| recipeName     | String                                                                                     | name of the recipe to add.                                                                              | false | `null`        |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                          | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                | false | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                    | [craftmiliter.api.item.IIngredient](/vanilla/api/items/IIngredient) 数组供输入                               | false | `null`        |
| recipeFunction | [craftbinstruer.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | 可选的 [craftbinstruer.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) 用于更高级的条件 | true  | `null`        |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as craftwiner.api.item.IItemStack, components as craftbiner.api.item.IIngredient[], recipeFunctionArray;
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, input as IItemStack[]) => {if(input[0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数             | 类型                                                                                       | 描述                                                                                               | 可选的   | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                       | false | `null`        |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                         | false | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]                    | [craftmiliter.api.item.IIngredient](/vanilla/api/items/IIngredient) 的数组                          | false | `null`        |
| recipeFunction | [craftbinstruer.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | 可选 [为更高级的条件的 craftbiner.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | true  | `null`        |


### getRecipeByName

返回类型： [craftbiner.api.配方。WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByname(名称为字符串)；
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | String | No description provided |


### getRecipesBy输出

返回类型：列表&lt;[craftbinstrues.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(输出为 craftbiner.api.item.IIngredient);
```

| 参数         | 类型                                                                  | 描述                      |
| ---------- | ------------------------------------------------------------------- | ----------------------- |
| output（输出） | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |


### removeAll

Remove all recipes in this registry

```zenscript
craftingTable.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | String | modid of the recipes to remove |



通过添加排除检查，删除基于注册表名称的配方，这样除了指定的几个选项之外，您可以删除整个模组。

```zenscript
craftingTable.removeByModed(modian as String, exclusion as craftweapi.recipe.RecipeFilter);
craftingTable.removeByModed("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                                              | 描述                             |
| ----- | --------------------------------------------------------------- | ------------------------------ |
| modid | String                                                          | modid of the recipes to remove |
| 不包含   | [制作器.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | String | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述                   |
| ---------- | ----------------------------------------------------------------- | -------------------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## 参数

| 名称            | 类型     | 可获得  | 可设置   |
| ------------- | ------ | ---- | ----- |
| commandString | String | true | false |

