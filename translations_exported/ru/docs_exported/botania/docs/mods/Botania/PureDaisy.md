# PureDaisy



This class was added by a mod with mod-id `botania`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.PureDaisy;
```


## Implemented Interfaces
PureDaisy implements the following interfaces. That means all methods defined in these interfaces are also available in PureDaisy

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
PureDaisy.addJSONRecipe(name as string, data as IData) as void
```

| Параметр | Тип                              | Description             |
| -------- | -------------------------------- | ----------------------- |
| name     | string                           | No Description Provided |
| data     | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a Pure Daisy conversion recipe.

Return Type: void

```zenscript
// PureDaisy.addRecipe(name as string, output as MCBlockState, input as StateIngredient, time as int) as void

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_test", <blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, 50);
```

| Параметр | Тип                                              | Description                                                           | Optional | DefaultValue |
| -------- | ------------------------------------------------ | --------------------------------------------------------------------- | -------- | ------------ |
| name     | string                                           | Name of the recipe to add                                             | false    |              |
| output   | [MCBlockState](/vanilla/api/block/MCBlockState)  | Output block state                                                    | false    |              |
| input    | [StateIngredient](/mods/Botania/StateIngredient) | Input ingredient                                                      | false    |              |
| time     | int                                              | Optional conversion time (note that the real time is multiplied by 8) | true     | 150          |

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// PureDaisy.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:pure_daisy>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
PureDaisy.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// PureDaisy.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:pure_daisy>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
PureDaisy.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PureDaisy.removeAll() as void

<recipetype:botania:pure_daisy>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PureDaisy.removeByModid(modid as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| modid    | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PureDaisy.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Параметр  | Тип                                              | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
PureDaisy.removeByName(name as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PureDaisy.removeByRegex(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=removeRecipe}

Removes recipes by output block state

Return Type: void

```zenscript
// PureDaisy.removeRecipe(state as MCBlockState) as void

<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingrock>);
```

| Параметр | Тип                                             | Description        |
| -------- | ----------------------------------------------- | ------------------ |
| state    | [MCBlockState](/vanilla/api/block/MCBlockState) | Output block state |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
PureDaisy.removeRecipeByInput(input as IItemStack) as void
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

