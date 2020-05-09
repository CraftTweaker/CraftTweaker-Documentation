# CraftingTableManager #工作台合成表管理



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.CraftingTableManager
```

## 已实现的接口
CraftingTableManager实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 使用方式
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                                     | 描述                              |
| -------- | ------------------------------------------------------ | ------------------------------- |
| name（名称） | String                                                 | name of the recipe              |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | 类型                                                                           | 说明                                                                                                                 | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                       | name of the recipe to add.                                                                                         | false      | null          |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | false      | null          |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | false      | null          |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | true       | null          |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                         | Description                                                                                                        | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                       | name of the recipe to add.                                                                                         | false      | null          |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | false      | null          |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | false      | null          |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | true       | null          |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                        | Description                                                                                                       | IsOptional | Default Value |
| -------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                      | name of the recipe to add.                                                                                        | false      | null          |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                                 | false      | null          |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | array of IIngredient for inputs                                                                                   | false      | null          |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray for more advanced conditions | true       | null          |


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

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



