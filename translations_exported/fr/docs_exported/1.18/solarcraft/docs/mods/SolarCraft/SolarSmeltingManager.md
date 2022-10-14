# SolarSmeltingManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.SolarSmeltingManager;
```


## Implemented Interfaces
SolarSmeltingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SolarSmeltingManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[SolarSmeltingRecipe](/mods/SolarCraft/Recipe/SolarSmeltingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
SolarSmeltingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Uses the Solar Lens and the power of the Sun to Smelt items The sun is a deadly lazer. No IIngredients are supported currently. This can change in the future.

Return Type: void

```zenscript
// SolarSmeltingManager.addRecipe(name as string, output as IItemStack, inputs as IItemStack[], time as int) as void

<recipetype:solarforge:solar_smelting>.addRecipe("test_solar_smelting_recipe", <item:minecraft:diamond_ingot>, [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:gold_ingot>], 200);
```

| Parameter | Type                                         | Description                       |
| --------- | -------------------------------------------- | --------------------------------- |
| name      | string                                       | The recipe name                   |
| output    | [IItemStack](/vanilla/api/item/IItemStack)   | The output of the recipe          |
| inputs    | [IItemStack](/vanilla/api/item/IItemStack)[] | The inputs of the recipe          |
| time      | int                                          | The processing time of the recipe |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SolarSmeltingManager.getAllRecipes() as stdlib.List<T>

<recipetype:solarforge:solar_smelting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SolarSmeltingManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SolarSmeltingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:solarforge:solar_smelting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SolarSmeltingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
SolarSmeltingManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// SolarSmeltingManager.removeAll() as void

<recipetype:solarforge:solar_smelting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
SolarSmeltingManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SolarSmeltingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| exclure   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SolarSmeltingManager.removeByName(name as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SolarSmeltingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| exclure   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

