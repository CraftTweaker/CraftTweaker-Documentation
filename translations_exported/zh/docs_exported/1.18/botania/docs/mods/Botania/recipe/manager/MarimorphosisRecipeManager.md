# MarimorphosisRecipeManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.MarimorphosisRecipeManager;
```


## 已实现的接口
MarimorphosisRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in MarimorphosisRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
MarimorphosisRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MarimorphosisRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:marimorphosis>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MarimorphosisRecipeManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MarimorphosisRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:marimorphosis>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MarimorphosisRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerOreWeight}

Registers a new ore weight.

Return Type: void

```zenscript
// MarimorphosisRecipeManager.registerOreWeight(name as string, output as BlockIngredient, input as Block, weight as int, weightBonus as int, biomes as BiomeCategory[]) as void

<recipetype:botania:marimorphosis>.registerOreWeight("orechid_test", <blockstate:minecraft:dirt>, <block:minecraft:diamond_ore>, 50, 10, the biomes to apply the extra weight in);
```

| 参数          | 类型                                                        | 描述                      |
| ----------- | --------------------------------------------------------- | ----------------------- |
| name（名称）    | string                                                    | The name of the weight  |
| output（输出）  | [BlockIngredient](/vanilla/api/block/BlockIngredient)     | The blocks to output    |
| input（输入）   | [Block](/vanilla/api/block/Block)                         | The input block         |
| weight      | int                                                       | The weight              |
| weightBonus | int                                                       | The bonus weight        |
| biomes      | [BiomeCategory](/vanilla/api/world/biome/BiomeCategory)[] | No Description Provided |


:::

:::group{name=remove}

Removes marimorphosis weights that output the given blockstate.

Return Type: void

```zenscript
// MarimorphosisRecipeManager.remove(output as BlockState) as void

<recipetype:botania:marimorphosis>.remove(<blockstate:minecraft:dirt>);
```

| 参数         | 类型                                          | 描述                               |
| ---------- | ------------------------------------------- | -------------------------------- |
| output（输出） | [BlockState](/vanilla/api/block/BlockState) | The blockstate output to remove. |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// MarimorphosisRecipeManager.removeAll() as void

<recipetype:botania:marimorphosis>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
MarimorphosisRecipeManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
MarimorphosisRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
MarimorphosisRecipeManager.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
MarimorphosisRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

