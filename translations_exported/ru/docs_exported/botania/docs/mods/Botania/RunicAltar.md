# RuneAltar



This class was added by a mod with mod-id `botania`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.RuneAltar;
```


## Implemented Interfaces
RuneAltar implements the following interfaces. That means all methods defined in these interfaces are also available in RuneAltar

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
RuneAltar.addJSONRecipe(name as string, data as IData) as void
```

| Параметр | Тип                              | Description             |
| -------- | -------------------------------- | ----------------------- |
| name     | string                           | No Description Provided |
| data     | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds the specified runic altar recipe.

Return Type: void

```zenscript
RuneAltar.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient[]) as void
```

| Параметр | Тип                                             | Description               |
| -------- | ----------------------------------------------- | ------------------------- |
| name     | string                                          | Name of the recipe to add |
| output   | [IItemStack](/vanilla/api/items/IItemStack)     | Output item               |
| mana     | int                                             | Recipe mana cost          |
| inputs   | [IIngredient](/vanilla/api/items/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// RuneAltar.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:botania:runic_altar>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
RuneAltar.getRecipeByName(name as string) as WrapperRecipe
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// RuneAltar.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:botania:runic_altar>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
RuneAltar.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// RuneAltar.removeAll() as void

<recipetype:botania:runic_altar>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
RuneAltar.removeByModid(modid as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| modid    | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
RuneAltar.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Параметр  | Тип                                              | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
RuneAltar.removeByName(name as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
RuneAltar.removeByRegex(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
RuneAltar.removeRecipe(output as IIngredient) as void
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
RuneAltar.removeRecipe(output as IItemStack) as void
```

| Параметр | Тип                                         | Description             |
| -------- | ------------------------------------------- | ----------------------- |
| output   | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
RuneAltar.removeRecipeByInput(input as IItemStack) as void
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

