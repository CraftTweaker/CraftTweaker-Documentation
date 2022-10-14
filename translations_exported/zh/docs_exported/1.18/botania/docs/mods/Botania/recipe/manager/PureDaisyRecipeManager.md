# PureDaisyRecipeManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.PureDaisyRecipeManager;
```


## 已实现的接口
PureDaisyRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in PureDaisyRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
PureDaisyRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a Pure Daisy conversion recipe.

Return Type: void

```zenscript
// PureDaisyRecipeManager.addRecipe(name as string, output as BlockState, input as BlockIngredient, time as int) as void

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_test", <blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, 50);
```

| 参数         | 类型                                                    | 描述                                                                    | 可选    | DefaultValue |
| ---------- | ----------------------------------------------------- | --------------------------------------------------------------------- | ----- | ------------ |
| name（名称）   | string                                                | Name of the recipe to add                                             | false |              |
| output（输出） | [BlockState](/vanilla/api/block/BlockState)           | Output block state                                                    | false |              |
| input（输入）  | [BlockIngredient](/vanilla/api/block/BlockIngredient) | Input ingredient                                                      | false |              |
| time       | int                                                   | Optional conversion time (note that the real time is multiplied by 8) | true  | 150          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// PureDaisyRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:pure_daisy>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
PureDaisyRecipeManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// PureDaisyRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:pure_daisy>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
PureDaisyRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Removes recipes who's output state matches the given ingredient

Return Type: void

```zenscript
// PureDaisyRecipeManager.remove(ingredient as BlockIngredient) as void

<recipetype:botania:pure_daisy>.remove(<blockstate:botania:livingrock>);
```

| 参数         | 类型                                                    | 描述                                        |
| ---------- | ----------------------------------------------------- | ----------------------------------------- |
| ingredient | [BlockIngredient](/vanilla/api/block/BlockIngredient) | ingredient that should be matched against |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PureDaisyRecipeManager.removeAll() as void

<recipetype:botania:pure_daisy>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
PureDaisyRecipeManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PureDaisyRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
PureDaisyRecipeManager.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PureDaisyRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

