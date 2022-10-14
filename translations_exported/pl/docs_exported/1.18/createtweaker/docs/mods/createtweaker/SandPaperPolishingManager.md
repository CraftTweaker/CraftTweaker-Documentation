# SandPaperPolishingManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.SandPaperPolishingManager;
```


## Implemented Interfaces
SandPaperPolishingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SandPaperPolishingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[SandPaperPolishingRecipe](/mods/createtweaker/recipe/type/SandPaperPolishingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
SandPaperPolishingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a sand paper polishing recipe.

Return Type: void

```zenscript
// SandPaperPolishingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int) as void

<recipetype:create:sandpaper_polishing>.addRecipe("polished", <item:minecraft:diamond> % 50, <item:minecraft:dirt> * 5, 200);
```

| Parameter | Type                                                                                                              | Description                                     | Optional | DefaultValue |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------- | ------------ |
| name      | string                                                                                                            | The name of the recipe.                         | false    |              |
| output    | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output of the recipe.                       | false    |              |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                | The input of the recipe.                        | false    |              |
| duration  | int                                                                                                               | The duration of the recipe (default 100 ticks). | true     | 100          |


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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


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

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
SandPaperPolishingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parameter     | Type                                                                                                                           | Description             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Return Type: void

```zenscript
SandPaperPolishingManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
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

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| wyklucz   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SandPaperPolishingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| wyklucz   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

