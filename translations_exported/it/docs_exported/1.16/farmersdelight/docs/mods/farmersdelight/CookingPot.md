# CookingPot

Farmer's Delight Cooking Pot recipes.

This class was added by a mod with mod-id `farmersdelight`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CookingPot;
```


## Interfacce Implementate
CookingPot implements the following interfaces. That means all methods defined in these interfaces are also available in CookingPot

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
CookingPot.addJSONRecipe(name as string, data as IData) as void
```

| Parametro | Tipo                             | Descrizione             |
| --------- | -------------------------------- | ----------------------- |
| nome      | string                           | No Description Provided |
| data      | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Add a cooking pot recipe.

Return Type: void

```zenscript
// CookingPot.addRecipe(name as string, output as IItemStack, inputs as IIngredient[], container as IItemStack, experience as float, cookTime as int) as void

<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:gold_block>], <item:minecraft:apple>, 100, 400);
```

| Parametro  | Tipo                                            | Descrizione               | Optional | DefaultValue |
| ---------- | ----------------------------------------------- | ------------------------- | -------- | ------------ |
| nome       | string                                          | Name of the recipe to add | no       |              |
| output     | [IItemStack](/vanilla/api/items/IItemStack)     | Output item               | no       |              |
| inputs     | [IIngredient](/vanilla/api/items/IIngredient)[] | Input ingredients         | no       |              |
| container  | [IItemStack](/vanilla/api/items/IItemStack)     | Container item            | sì       |              |
| experience | float                                           | Experience granted        | sì       | 0.0          |
| cookTime   | int                                             | Cooking time              | sì       | 200          |


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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


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

| Parametro | Tipo                                          | Descrizione             |
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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CookingPot.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| esclude   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CookingPot.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CookingPot.removeByRegex(regex as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IIngredient) as void
```

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CookingPot.removeRecipe(output as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
CookingPot.removeRecipeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Proprietà

| Nome       | Tipo                                                                                                           | Ha Getter | Ha Setter | Descrizione             |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | sì        | no        | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | sì        | no        | No Description Provided |

