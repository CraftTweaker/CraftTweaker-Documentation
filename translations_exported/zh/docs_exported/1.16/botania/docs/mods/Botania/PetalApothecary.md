# PetalApothecary



This class was added by a mod with mod-id `botania`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.PetalApothecary;
```


## 已实现的接口
PetalApothecary implements the following interfaces. That means all methods defined in these interfaces are also available in PetalApothecary

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 使用方式

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
PetalApothecary.addJSONRecipe(name as string, data as IData) as void
```

| 参数       | 类型                                   | 描述                      |
| -------- | ------------------------------------ | ----------------------- |
| name（名称） | string                               | No Description Provided |
| data     | [IData #数据](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds the specified petal apothecary recipe.

Return Type: void

```zenscript
// PetalApothecary.addRecipe(name as string, output as IItemStack, inputs as IIngredient[]) as void

<recipetype:botania:petal_apothecary>.addRecipe("rune_altar_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:apple>);
```

| 参数         | 类型                                              | 描述                        |
| ---------- | ----------------------------------------------- | ------------------------- |
| name（名称）   | string                                          | Name of the recipe to add |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack)     | Output item               |
| inputs     | [IIngredient](/vanilla/api/items/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// PetalApothecary.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:petal_apothecary>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
PetalApothecary.getRecipeByName(name as string) as WrapperRecipe
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// PetalApothecary.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:petal_apothecary>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
PetalApothecary.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PetalApothecary.removeAll() as void

<recipetype:botania:petal_apothecary>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PetalApothecary.removeByModid(modid as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PetalApothecary.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| modid | string                                           | No Description Provided |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
PetalApothecary.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PetalApothecary.removeByRegex(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PetalApothecary.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| regex | string                                           | No Description Provided |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
PetalApothecary.removeRecipe(output as IIngredient) as void
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
PetalApothecary.removeRecipe(output as IItemStack) as void
```

| 参数         | 类型                                          | 描述                      |
| ---------- | ------------------------------------------- | ----------------------- |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
PetalApothecary.removeRecipeByInput(input as IItemStack) as void
```

| 参数        | 类型                                          | 描述                      |
| --------- | ------------------------------------------- | ----------------------- |
| input（输入） | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## 参数

| 名称         | 类型                                                                                                             | 可获得  | 可设置   | 描述                      |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true | false | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | No Description Provided |

