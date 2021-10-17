# CookingPot

Farmer's Delight Cooking Pot recipes.

This class was added by a mod with mod-id `farmersdelight`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CookingPot;
```


## Implemented Interfaces
CookingPot implements the following interfaces. That means all methods defined in these interfaces are also available in CookingPot

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
CookingPot.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type                             | Description             |
| --------- | -------------------------------- | ----------------------- |
| name      | string                           | No Description Provided |
| data      | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Add a cooking pot recipe.

Return Type: void

```zenscript
// CookingPot.addRecipe(name as string, output as IItemStack, inputs as IIngredient[], container as IItemStack, experience as float, cookTime as int) as void

<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:gold_block>], <item:minecraft:apple>, 100, 400);
```

| Parameter  | Type                                            | Description               | Optional | DefaultValue |
| ---------- | ----------------------------------------------- | ------------------------- | -------- | ------------ |
| name       | string                                          | Name of the recipe to add | false    |              |
| output     | [IItemStack](/vanilla/api/items/IItemStack)     | Output item               | false    |              |
| inputs     | [IIngredient](/vanilla/api/items/IIngredient)[] | Input ingredients         | false    |              |
| container  | [IItemStack](/vanilla/api/items/IItemStack)     | Container item            | true     |              |
| experience | float                                           | Experience granted        | true     | 0.0          |
| cookTime   | int                                             | Cooking time              | true     | 200          |


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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


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

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CookingPot.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter | Type                                             | Description             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| wyklucz   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CookingPot.removeByName(name as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CookingPot.removeByRegex(regex as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IIngredient) as void
```

| Parameter | Type                                          | Description             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IItemStack) as void
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
CookingPot.removeRecipeByInput(input as IItemStack) as void
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Properties

| Name       | Type                                                                                                           | Has Getter | Has Setter | Description             |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true       | false      | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true       | false      | No Description Provided |

