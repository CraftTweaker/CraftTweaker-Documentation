# ManaInfusion



This class was added by a mod with mod-id `botania`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.ManaInfusion;
```


## Interfacce Implementate
ManaInfusion implements the following interfaces. That means all methods defined in these interfaces are also available in ManaInfusion

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
ManaInfusion.addJSONRecipe(name as string, data as IData) as void
```

| Parametro | Tipo                             | Descrizione             |
| --------- | -------------------------------- | ----------------------- |
| nome      | string                           | No Description Provided |
| data      | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a mana infusion recipe.

Return Type: void

```zenscript
// ManaInfusion.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as StateIngredient, group as string, function as RecipeFunctionSingle) as void

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <block:botania:alchemy_catalyst>, null, (usualOut as IItemStack, input as IItemStack) => { return usualOut.withTag(input.tag); });
```

| Parametro | Tipo                                                             | Descrizione                                                                       | Optional | DefaultValue |
| --------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------- | ------------ |
| nome      | string                                                           | Name of the recipe to add                                                         | no       |              |
| output    | [IItemStack](/vanilla/api/items/IItemStack)                      | Output item                                                                       | no       |              |
| input     | [IIngredient](/vanilla/api/items/IIngredient)                    | Input item                                                                        | no       |              |
| mana      | int                                                              | Required mana                                                                     | no       |              |
| catalyst  | [StateIngredient](/mods/Botania/StateIngredient)                 | Optional catalyst required under the mana pool for this recipe to craft           | sì       |              |
| gruppo    | string                                                           | Optional recipe group, use if you want to replace a grouped recipe in the lexicon | sì       |              |
| function  | [RecipeFunctionSingle](/vanilla/api/recipe/RecipeFunctionSingle) | Optional function modifying the output                                            | sì       |              |


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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


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

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ManaInfusion.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| modid     | string                                           | No Description Provided |
| esclude   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ManaInfusion.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ManaInfusion.removeByRegex(regex as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ManaInfusion.removeByRegex(regex as string, exclude as RecipeFilter) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| regex     | string                                           | No Description Provided |
| esclude   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IIngredient) as void
```

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
ManaInfusion.removeRecipe(output as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
ManaInfusion.removeRecipeByInput(input as IItemStack) as void
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

