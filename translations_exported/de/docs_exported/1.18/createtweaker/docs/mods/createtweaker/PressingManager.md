# PressingManager



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.PressingManager;
```


## Implemented Interfaces
PressingManager implements the following interfaces. That means all methods defined in these interfaces are also available in PressingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[PressingRecipe](/mods/createtweaker/recipe/type/PressingRecipe)&gt;

## Methoden

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
PressingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Beschreibung            |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a pressing recipe.

Return Type: void

```zenscript
// PressingManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], input as IIngredientWithAmount, duration as int) as void

<recipetype:create:pressing>.addRecipe("pressed", [<item:minecraft:diamond> % 50, <item:minecraft:apple>, (<item:minecraft:dirt> * 2) % 12], <item:minecraft:dirt>, 200);
```

| Parameter | Type                                                                                                                | Beschreibung                                    | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------- | ------------ |
| name      | string                                                                                                              | The name of the recipe.                         | false    |              |
| outputs   | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The outputs of the recipe.                      | false    |              |
| input     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                              | The input of the recipe.                        | false    |              |
| duration  | int                                                                                                                 | The duration of the recipe (default 100 ticks). | true     | 100          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// PressingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:pressing>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
PressingManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// PressingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:pressing>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
PressingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
PressingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parameter     | Type                                                                                                                           | Beschreibung            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Return Type: void

```zenscript
PressingManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// PressingManager.removeAll() as void

<recipetype:create:pressing>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
PressingManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Beschreibung            |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
PressingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter    | Type                                | Beschreibung            | Optional | DefaultValue                      |
| ------------ | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid        | string                              | No Description Provided | false    |                                   |
| ausschließen | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
PressingManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Beschreibung            |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
PressingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter    | Type                                | Beschreibung            | Optional | DefaultValue                      |
| ------------ | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex        | string                              | No Description Provided | false    |                                   |
| ausschließen | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Beschreibung            |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

