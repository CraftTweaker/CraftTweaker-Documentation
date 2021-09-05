# TerraPlate



This class was added by a mod with mod-id `botania`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.TerraPlate;
```


## 已实现的接口
TerraPlate implements the following interfaces. That means all methods defined in these interfaces are also available in TerraPlate

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
TerraPlate.addJSONRecipe(name as string, data as IData) as void
```

| 参数   | 类型                               | 描述                      |
| ---- | -------------------------------- | ----------------------- |
| name | string                           | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a terra plate recipe

Return Type: void

```zenscript
// TerraPlate.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient[]) as void

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:minecraft:diamond>, 20000, <item:minecraft:dirt>, <item:minecraft:cobblestone>, <item:minecraft:gravel>);
```

| 参数         | 类型                                              | 描述                        |
| ---------- | ----------------------------------------------- | ------------------------- |
| name       | string                                          | Name of the recipe to add |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack)     | Output item               |
| mana       | int                                             | Recipe mana cost          |
| inputs     | [IIngredient](/vanilla/api/items/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// TerraPlate.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:terra_plate>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
TerraPlate.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// TerraPlate.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:terra_plate>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
TerraPlate.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// TerraPlate.removeAll() as void

<recipetype:botania:terra_plate>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
TerraPlate.removeByModid(modid as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
TerraPlate.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| modid | string                                           | No Description Provided |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
TerraPlate.removeByName(name as string) as void
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
TerraPlate.removeByRegex(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
TerraPlate.removeRecipe(output as IIngredient) as void
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
TerraPlate.removeRecipe(output as IItemStack) as void
```

| 参数         | 类型                                          | 描述                      |
| ---------- | ------------------------------------------- | ----------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
TerraPlate.removeRecipeByInput(input as IItemStack) as void
```

| 参数        | 类型                                          | 描述                      |
| --------- | ------------------------------------------- | ----------------------- |
| input（输入） | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## 参数

| 名称         | 类型                                                                                                             | 可获得  | 可设置   | 描述                      |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true | false | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | No Description Provided |

