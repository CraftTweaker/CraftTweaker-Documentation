# ManaInfusion



This class was added by a mod with mod-id `botania`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.ManaInfusion;
```


## 已实现的接口
ManaInfusion implements the following interfaces. That means all methods defined in these interfaces are also available in ManaInfusion

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ManaInfusion.addJSONRecipe(name as string, data as IData) as void
```

| 参数   | 类型                               | 描述                      |
| ---- | -------------------------------- | ----------------------- |
| name | string                           | No Description Provided |
| data | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a mana infusion recipe.

Return Type: void

```zenscript
// ManaInfusion.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as StateIngredient, group as string, function as RecipeFunctionSingle) as void

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <block:botania:alchemy_catalyst>, null, (usualOut as IItemStack, input as IItemStack) => { return usualOut.withTag(input.tag); });
```

| 参数         | 类型                                                               | 描述                                                                                | 可选    | DefaultValue |
| ---------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----- | ------------ |
| name       | string                                                           | Name of the recipe to add                                                         | false |              |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack)                      | Output item                                                                       | false |              |
| input（输入）  | [材料（IIngredient）](/vanilla/api/items/IIngredient)                | Input item                                                                        | false |              |
| mana       | int                                                              | Required mana                                                                     | false |              |
| catalyst   | [StateIngredient](/mods/Botania/StateIngredient)                 | Optional catalyst required under the mana pool for this recipe to craft           | true  |              |
| group      | string                                                           | Optional recipe group, use if you want to replace a grouped recipe in the lexicon | true  | test         |
| function   | [RecipeFunctionSingle](/vanilla/api/recipe/RecipeFunctionSingle) | Optional function modifying the output                                            | true  |              |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// ManaInfusion.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:mana_infusion>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
ManaInfusion.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// ManaInfusion.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:mana_infusion>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
ManaInfusion.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ManaInfusion.removeAll() as void

<recipetype:botania:mana_infusion>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ManaInfusion.removeByModid(modid as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| modid | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ManaInfusion.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| modid | string                                           | No Description Provided |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ManaInfusion.removeByName(name as string) as void
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ManaInfusion.removeByRegex(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IIngredient) as void
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IItemStack) as void
```

| 参数         | 类型                                          | 描述                      |
| ---------- | ------------------------------------------- | ----------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ManaInfusion.removeRecipeByInput(input as IItemStack) as void
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

