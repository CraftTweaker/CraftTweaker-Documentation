# SolarSmeltingManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.SolarSmeltingManager;
```


## 已实现的接口
SolarSmeltingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SolarSmeltingManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[SolarSmeltingRecipe](/mods/SolarCraft/Recipe/SolarSmeltingRecipe)&gt;

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
SolarSmeltingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Uses the Solar Lens and the power of the Sun to Smelt items The sun is a deadly lazer. No IIngredients are supported currently. This can change in the future.

Return Type: void

```zenscript
// SolarSmeltingManager.addRecipe(name as string, output as IItemStack, inputs as IItemStack[], time as int) as void

<recipetype:solarforge:solar_smelting>.addRecipe("test_solar_smelting_recipe", <item:minecraft:diamond_ingot>, [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:gold_ingot>], 200);
```

| 参数         | 类型                                           | 描述                                |
| ---------- | -------------------------------------------- | --------------------------------- |
| name（名称）   | string                                       | The recipe name                   |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)   | The output of the recipe          |
| inputs     | [IItemStack](/vanilla/api/item/IItemStack)[] | The inputs of the recipe          |
| time       | int                                          | The processing time of the recipe |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SolarSmeltingManager.getAllRecipes() as stdlib.List<T>

<recipetype:solarforge:solar_smelting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SolarSmeltingManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SolarSmeltingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:solarforge:solar_smelting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SolarSmeltingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
SolarSmeltingManager.remove(output as IIngredient) as void
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// SolarSmeltingManager.removeAll() as void

<recipetype:solarforge:solar_smelting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
SolarSmeltingManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SolarSmeltingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SolarSmeltingManager.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SolarSmeltingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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
