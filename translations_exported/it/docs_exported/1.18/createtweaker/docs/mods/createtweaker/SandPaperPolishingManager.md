# SandPaperPolishingManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.SandPaperPolishingManager;
```


## Interfacce Implementate
SandPaperPolishingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SandPaperPolishingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[SandPaperPolishingRecipe](/mods/createtweaker/recipe/type/SandPaperPolishingRecipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
SandPaperPolishingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a sand paper polishing recipe.

Return Type: void

```zenscript
// SandPaperPolishingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int) as void

<recipetype:create:sandpaper_polishing>.addRecipe("polished", <item:minecraft:diamond> % 50, <item:minecraft:dirt> * 5, 200);
```

| Parametro | Tipo                                                                                                              | Descrizione                                     | Optional | DefaultValue |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------- | ------------ |
| nome      | string                                                                                                            | The name of the recipe.                         | no       |              |
| output    | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output of the recipe.                       | no       |              |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                | The input of the recipe.                        | no       |              |
| duration  | int                                                                                                               | The duration of the recipe (default 100 ticks). | sì       | 100          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SandPaperPolishingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:sandpaper_polishing>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SandPaperPolishingManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SandPaperPolishingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:sandpaper_polishing>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SandPaperPolishingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
SandPaperPolishingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parametro     | Tipo                                                                                                                           | Descrizione             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| nome          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Return Type: void

```zenscript
SandPaperPolishingManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// SandPaperPolishingManager.removeAll() as void

<recipetype:create:sandpaper_polishing>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByName(names as string[]) as void
```

| Parametro | Tipo     | Descrizione             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

