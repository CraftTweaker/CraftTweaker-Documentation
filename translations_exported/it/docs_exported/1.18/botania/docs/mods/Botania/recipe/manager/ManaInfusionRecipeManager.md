# ManaInfusionRecipeManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.ManaInfusionRecipeManager;
```


## Interfacce Implementate
ManaInfusionRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in ManaInfusionRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
ManaInfusionRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a mana infusion recipe.

Return Type: void

```zenscript
// ManaInfusionRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalyst as BlockIngredient, group as string, function as RecipeFunctionSingle) as void

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <block:botania:alchemy_catalyst>, "", (usualOut as IItemStack, input as IItemStack) => { return usualOut.withTag(input.tag); });
```

| Parametro | Tipo                                                                      | Descrizione                                                                       | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------- | ------------ |
| nome      | string                                                                    | Name of the recipe to add                                                         | no       |              |
| output    | [IItemStack](/vanilla/api/item/IItemStack)                                | Output item                                                                       | no       |              |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                        | Input item                                                                        | no       |              |
| mana      | int                                                                       | Required mana                                                                     | no       |              |
| catalyst  | [BlockIngredient](/vanilla/api/block/BlockIngredient)                     | Optional catalyst required under the mana pool for this recipe to craft           | sì       |              |
| gruppo    | string                                                                    | Optional recipe group, use if you want to replace a grouped recipe in the lexicon | sì       |              |
| function  | [RecipeFunctionSingle](/vanilla/api/recipe/function/RecipeFunctionSingle) | Optional function modifying the output                                            | sì       |              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ManaInfusionRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:mana_infusion>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ManaInfusionRecipeManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ManaInfusionRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:mana_infusion>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ManaInfusionRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
ManaInfusionRecipeManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// ManaInfusionRecipeManager.removeAll() as void

<recipetype:botania:mana_infusion>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
ManaInfusionRecipeManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
ManaInfusionRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
ManaInfusionRecipeManager.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
ManaInfusionRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | No Description Provided |

