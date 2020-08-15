# CraftingTableManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.CraftingTableManager
```

## Implemented Interfaces
CraftingTableManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## メソッド
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| パラメータ | タイプ                                                    | 説明                              |
| ----- | ------------------------------------------------------ | ------------------------------- |
| name  | 文字列型                                                   | name of the recipe              |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                          | 説明                                                                                                                 | IsOptional | デフォルト値 |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------ |
| recipeName     | 文字列型                                                                         | name of the recipe to add.                                                                                         | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | true       | null   |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                          | 説明                                                                                                                 | IsOptional | デフォルト値 |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------ |
| recipeName     | 文字列型                                                                         | name of the recipe to add.                                                                                         | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | true       | null   |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| パラメータ          | タイプ                                                                         | 説明                                                                                                                | IsOptional | デフォルト値 |
| -------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| recipeName     | 文字列型                                                                        | name of the recipe to add.                                                                                        | false      | null   |
| 出力             | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                                 | false      | null   |
| 材料             | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | array of IIngredient for inputs                                                                                   | false      | null   |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray for more advanced conditions | true       | null   |


### すべて削除

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

| パラメータ | タイプ  | 説明                             |
| ----- | ---- | ------------------------------ |
| modid | 文字列型 | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| パラメータ | タイプ  | 説明                                |
| ----- | ---- | --------------------------------- |
| 名前    | 文字列型 | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| パラメータ | タイプ  | 説明                     |
| ----- | ---- | ---------------------- |
| regex | 文字列型 | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| パラメータ | タイプ                                                               | 説明                   |
| ----- | ----------------------------------------------------------------- | -------------------- |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



