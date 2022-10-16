# FermentingBarrelManager

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sushigocrafting.FermentingBarrelManager;
```


## 已实现的接口
FermentingBarrelManager implements the following interfaces. That means all methods defined in these interfaces are also available in FermentingBarrelManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[FermentingBarrelRecipe](/mods/SushiGoCrafting/FermentingBarrelRecipe)&gt;

## 使用方式

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
FermentingBarrelManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                      |
| -------- | ------------------------------------------ | ----------------------- |
| name（名称） | string                                     | No Description Provided |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}



Return Type: void

```zenscript
// FermentingBarrelManager.addRecipe(name as string, input as IIngredient, stack as IFluidStack, output as IItemStack) as void

myFermentingBarrelManager.addRecipe("barrel_test_recipe", <item:minecraft:apple> * 2, <fluid:minecraft:water>, <item:sushigocrafting:soy_sauce>.withTag({Amount: 25 as int}));
```

| 参数         | 类型                                                     | 描述                                                          |
| ---------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| name（名称）   | string                                                 | The unique name of the recipe. Standard naming rules apply. |
| input（输入）  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The input of the recipe.                                    |
| 堆叠         | [IFluidStack](/forge/api/fluid/IFluidStack)            | The fluid of the recipe                                     |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)             | The output of the recipe                                    |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// FermentingBarrelManager.getAllRecipes() as stdlib.List<T>

myFermentingBarrelManager.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
FermentingBarrelManager.getRecipeByName(name as string) as T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// FermentingBarrelManager.getRecipeMap() as T[ResourceLocation]

myFermentingBarrelManager.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
FermentingBarrelManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// FermentingBarrelManager.removeAll() as void

myFermentingBarrelManager.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
FermentingBarrelManager.removeByInput(input as IItemStack) as void
```

| 参数        | 类型                                         | 描述                      |
| --------- | ------------------------------------------ | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
FermentingBarrelManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue                      |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------------------------- |
| modid | string                              | No Description Provided | false |                                   |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
FermentingBarrelManager.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
FermentingBarrelManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

