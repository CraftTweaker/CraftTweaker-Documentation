# CookingPot

Farmer's Delight Cooking Pot recipes.

This class was added by a mod with mod-id `farmersdelight`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CookingPot;
```


## 已实现的接口
CookingPot implements the following interfaces. That means all methods defined in these interfaces are also available in CookingPot

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 使用方式

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
CookingPot.addJSONRecipe(name as string, data as IData) as void
```

| 参数       | 类型                                   | 描述                      |
| -------- | ------------------------------------ | ----------------------- |
| name（名称） | string                               | No Description Provided |
| data     | [IData #数据](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Add a cooking pot recipe.

Return Type: void

```zenscript
// CookingPot.addRecipe(name as string, output as IItemStack, inputs as IIngredient[], container as IItemStack, experience as float, cookTime as int) as void

<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:gold_block>], <item:minecraft:apple>, 100, 400);
```

| 参数             | 类型                                              | 描述                        | 可选    | DefaultValue |
| -------------- | ----------------------------------------------- | ------------------------- | ----- | ------------ |
| name（名称）       | string                                          | Name of the recipe to add | false |              |
| output（输出）     | [IItemstack](/vanilla/api/items/IItemStack)     | Output item               | false |              |
| inputs         | [IIngredient](/vanilla/api/items/IIngredient)[] | Input ingredients         | false |              |
| container      | [IItemstack](/vanilla/api/items/IItemStack)     | Container item            | true  |              |
| experience     | float                                           | Experience granted        | true  | 0.0          |
| cookTime #烧制时间 | int                                             | Cooking time              | true  | 200          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// CookingPot.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:farmersdelight:cooking>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CookingPot.getRecipeByName(name as string) as WrapperRecipe
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// CookingPot.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:farmersdelight:cooking>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CookingPot.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// CookingPot.removeAll() as void

<recipetype:farmersdelight:cooking>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CookingPot.removeByModid(modid as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CookingPot.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| modid | string                                           | No Description Provided |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CookingPot.removeByName(name as string) as void
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CookingPot.removeByRegex(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IIngredient) as void
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IItemStack) as void
```

| 参数         | 类型                                          | 描述                      |
| ---------- | ------------------------------------------- | ----------------------- |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
CookingPot.removeRecipeByInput(input as IItemStack) as void
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

