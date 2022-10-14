# InfusingTableManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.InfusingTableManager;
```


## Implemented Interfaces
InfusingTableManager implements the following interfaces. That means all methods defined in these interfaces are also available in InfusingTableManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[InfusingTableRecipe](/mods/SolarCraft/Recipe/InfusingTableRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
InfusingTableManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a recipe to the Infusing crafting table.

 The inputs array must be a 3x3 Two dimensional array, just like the craftingTable one you are probably used to. No IIngredients are supported currently. This can change in the future.

 You can get a list of usable fragment id's by running the `/ct dump solarforge_fragments` command.

Return Type: void

```zenscript
// InfusingTableManager.addRecipe(name as string, output as IItemStack, inputs as IItemStack[][], processingTime as int, fragment as string) as void

<recipetype:solarforge:infusing_crafting>.addRecipe("infusing_crafting_table_recipe_test", <item:minecraft:lapis_lazuli>, [
 [<item:minecraft:blue_dye>, <item:minecraft:glass>,<item:minecraft:blue_dye>],
 [<item:minecraft:blue_dye>, <item:minecraft:golden_ingot>, <item:minecraft:glass>],
 [<item:minecraft:glass>, <item:minecraft:blue_dye>, <item:minecraft:glass>],
 ], 300, "energy_dust");
```

| Parameter      | Type                                           | Description                                                             |
| -------------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| name           | string                                         | The recipe name                                                         |
| output         | [IItemStack](/vanilla/api/item/IItemStack)     | The [IItemStack](/vanilla/api/item/IItemStack) the recipe should output |
| inputs         | [IItemStack](/vanilla/api/item/IItemStack)[][] | The inputs necessary for the recipe to craft                            |
| processingTime | int                                            | The amount of time the recipe should process for                        |
| fragment       | string                                         | The fragment used in the recipe.                                        |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// InfusingTableManager.getAllRecipes() as stdlib.List<T>

<recipetype:solarforge:infusing_crafting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
InfusingTableManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// InfusingTableManager.getRecipeMap() as T[ResourceLocation]

<recipetype:solarforge:infusing_crafting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
InfusingTableManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
InfusingTableManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// InfusingTableManager.removeAll() as void

<recipetype:solarforge:infusing_crafting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
InfusingTableManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
InfusingTableManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
InfusingTableManager.removeByName(name as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
InfusingTableManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| 名称         | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

