# ElvenTradeRecipeManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.ElvenTradeRecipeManager;
```


## 已实现的接口
ElvenTradeRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in ElvenTradeRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
ElvenTradeRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds an elven trade recipe.

Return Type: void

```zenscript
// ElvenTradeRecipeManager.addRecipe(name as string, outputs as IItemStack[], inputs as IIngredient[]) as void

<recipetype:botania:elven_trade>.addRecipe("elven_trade_test", [<item:minecraft:apple>, <item:minecraft:lapis_block>], <item:minecraft:glowstone>, <item:minecraft:yellow_wool>);
```

| 参数       | 类型                                                   | 描述                        |
| -------- | ---------------------------------------------------- | ------------------------- |
| name（名称） | string                                               | Name of the recipe to add |
| outputs  | [IItemStack](/vanilla/api/item/IItemStack)[]         | Array of outputs          |
| inputs   | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | Inputs for the recipe     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ElvenTradeRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:elven_trade>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ElvenTradeRecipeManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ElvenTradeRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:elven_trade>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ElvenTradeRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Removes a single-output recipe.

Return Type: void

```zenscript
// ElvenTradeRecipeManager.remove(output as IIngredient) as void

<recipetype:botania:elven_trade>.remove(<item:botania:dragonstone>);
```

| 参数         | 类型                                                     | 描述            |
| ---------- | ------------------------------------------------------ | ------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | Recipe output |


:::

:::group{name=remove}

Removes a recipe with multiple outputs.

 Note that as Botania does not come with any multiple-output recipes, this example will not work out of the box.

Return Type: void

```zenscript
// ElvenTradeRecipeManager.remove(outputs as IIngredient[]) as void

<recipetype:botania:elven_trade>.remove([<item:botania:dragonstone>, <item:minecraft:diamond>]);
```

| 参数      | 类型                                                   | 描述             |
| ------- | ---------------------------------------------------- | -------------- |
| outputs | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | Recipe outputs |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ElvenTradeRecipeManager.removeAll() as void

<recipetype:botania:elven_trade>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
ElvenTradeRecipeManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ElvenTradeRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ElvenTradeRecipeManager.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ElvenTradeRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| regex | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------------------------- | ---- | ----- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | No Description Provided |

