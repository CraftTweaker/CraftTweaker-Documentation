# ElvenTrade



This class was added by a mod with mod-id `botania`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.ElvenTrade;
```


## Implemented Interfaces
ElvenTrade implements the following interfaces. That means all methods defined in these interfaces are also available in ElvenTrade

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ElvenTrade.addJSONRecipe(name as string, data as IData) as void
```

| Параметр | Тип                              | Description             |
| -------- | -------------------------------- | ----------------------- |
| name     | string                           | No Description Provided |
| data     | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds an elven trade recipe.

Return Type: void

```zenscript
// ElvenTrade.addRecipe(name as string, outputs as IItemStack[], inputs as IIngredient[]) as void

<recipetype:botania:elven_trade>.addRecipe("elven_trade_test", [<item:minecraft:apple>, <item:minecraft:lapis_block>], <item:minecraft:glowstone>, <item:minecraft:yellow_wool>);
```

| Параметр | Тип                                             | Description               |
| -------- | ----------------------------------------------- | ------------------------- |
| name     | string                                          | Name of the recipe to add |
| outputs  | [IItemStack](/vanilla/api/items/IItemStack)[]   | Array of outputs          |
| inputs   | [IIngredient](/vanilla/api/items/IIngredient)[] | Inputs for the recipe     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// ElvenTrade.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:elven_trade>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
ElvenTrade.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// ElvenTrade.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:elven_trade>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
ElvenTrade.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ElvenTrade.removeAll() as void

<recipetype:botania:elven_trade>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ElvenTrade.removeByModid(modid as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| modid    | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ElvenTrade.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Параметр  | Тип                                              | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ElvenTrade.removeByName(name as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ElvenTrade.removeByRegex(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ElvenTrade.removeRecipe(output as IIngredient) as void
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Removes a recipe with multiple outputs.

 Note that as Botania does not come with any multiple-output recipes, this example will not work out of the box.

Return Type: void

```zenscript
ElvenTrade.removeRecipe(outputs as IItemStack[]) as void
```

| Параметр | Тип                                           | Description    |
| -------- | --------------------------------------------- | -------------- |
| outputs  | [IItemStack](/vanilla/api/items/IItemStack)[] | Recipe outputs |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ElvenTrade.removeRecipeByInput(input as IItemStack) as void
```

| Параметр | Тип                                         | Description             |
| -------- | ------------------------------------------- | ----------------------- |
| input    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Свойства

| Название   | Тип                                                                                                            | Имеет Getter | Имеет Setter | Description             |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true         | false        | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true         | false        | No Description Provided |

