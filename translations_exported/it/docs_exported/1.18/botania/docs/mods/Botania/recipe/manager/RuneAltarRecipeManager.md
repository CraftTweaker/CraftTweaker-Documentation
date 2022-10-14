# RuneAltarRecipeManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.RuneAltarRecipeManager;
```


## Interfacce Implementate
RuneAltarRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in RuneAltarRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
RuneAltarRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds the specified runic altar recipe.

Return Type: void

```zenscript
// RuneAltarRecipeManager.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient[]) as void

<recipetype:botania:runic_altar>.addRecipe("rune_altar_test", <item:minecraft:diamond>, 5000, <item:botania:rune_air>, <item:botania:orange_petal>, <item:botania:red_petal>);
```

| Parametro | Tipo                                                 | Descrizione               |
| --------- | ---------------------------------------------------- | ------------------------- |
| nome      | string                                               | Name of the recipe to add |
| output    | [IItemStack](/vanilla/api/item/IItemStack)           | Output item               |
| mana      | int                                                  | Recipe mana cost          |
| inputs    | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// RuneAltarRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:runic_altar>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
RuneAltarRecipeManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// RuneAltarRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:runic_altar>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
RuneAltarRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
RuneAltarRecipeManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// RuneAltarRecipeManager.removeAll() as void

<recipetype:botania:runic_altar>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
RuneAltarRecipeManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
RuneAltarRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
RuneAltarRecipeManager.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
RuneAltarRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

