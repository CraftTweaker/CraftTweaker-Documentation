# TerraPlateRecipeManager



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.TerraPlateRecipeManager;
```


## Implemented Interfaces
TerraPlateRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in TerraPlateRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methoden

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
TerraPlateRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Beschreibung            |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a terra plate recipe

Return Type: void

```zenscript
// TerraPlateRecipeManager.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient[]) as void

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:minecraft:diamond>, 20000, <item:minecraft:dirt>, <item:minecraft:cobblestone>, <item:minecraft:gravel>);
```

| Parameter | Type                                                 | Beschreibung              |
| --------- | ---------------------------------------------------- | ------------------------- |
| name      | string                                               | Name of the recipe to add |
| output    | [IItemStack](/vanilla/api/item/IItemStack)           | Output item               |
| mana      | int                                                  | Recipe mana cost          |
| inputs    | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | Input items               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// TerraPlateRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:terra_plate>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
TerraPlateRecipeManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// TerraPlateRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:terra_plate>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
TerraPlateRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
TerraPlateRecipeManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// TerraPlateRecipeManager.removeAll() as void

<recipetype:botania:terra_plate>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
TerraPlateRecipeManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Beschreibung            |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
TerraPlateRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter    | Type                                | Beschreibung            | Optional | DefaultValue                      |
| ------------ | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid        | string                              | No Description Provided | false    |                                   |
| ausschließen | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
TerraPlateRecipeManager.removeByName(name as string) as void
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
TerraPlateRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

