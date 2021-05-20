# ManaInfusion



This class was added by a mod with mod-id `botania`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.ManaInfusion;
```


## Implemented Interfaces
ManaInfusion implements the following interfaces. That means all methods defined in these interfaces are also available in ManaInfusion

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ManaInfusion.addJSONRecipe(name as string, data as IData) as void
```

| Параметр | Тип                              | Description             |
| -------- | -------------------------------- | ----------------------- |
| name     | string                           | No Description Provided |
| data     | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a mana infusion recipe.

Return Type: void

```zenscript
// ManaInfusion.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as StateIngredient, group as string, function as RecipeFunctionSingle) as void

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <block:botania:alchemy_catalyst>, null, (usualOut as IItemStack, input as IItemStack) => { return usualOut.withTag(input.tag); });
```

| Параметр | Тип                                                              | Description                                                                       | Optional | DefaultValue |
| -------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------- | ------------ |
| name     | string                                                           | Name of the recipe to add                                                         | false    |              |
| output   | [IItemStack](/vanilla/api/items/IItemStack)                      | Output item                                                                       | false    |              |
| input    | [IIngredient](/vanilla/api/items/IIngredient)                    | Input item                                                                        | false    |              |
| mana     | int                                                              | Required mana                                                                     | false    |              |
| catalyst | [StateIngredient](/mods/Botania/StateIngredient)                 | Optional catalyst required under the mana pool for this recipe to craft           | true     |              |
| group    | string                                                           | Optional recipe group, use if you want to replace a grouped recipe in the lexicon | true     | test         |
| function | [RecipeFunctionSingle](/vanilla/api/recipe/RecipeFunctionSingle) | Optional function modifying the output                                            | true     |              |

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

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


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

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


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

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| modid    | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ManaInfusion.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Параметр  | Тип                                              | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| исключить | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ManaInfusion.removeByName(name as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ManaInfusion.removeByRegex(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IIngredient) as void
```

| Параметр | Тип                                           | Description             |
| -------- | --------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IItemStack) as void
```

| Параметр | Тип                                         | Description             |
| -------- | ------------------------------------------- | ----------------------- |
| output   | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ManaInfusion.removeRecipeByInput(input as IItemStack) as void
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

