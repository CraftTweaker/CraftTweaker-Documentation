# MixingManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.MixingManager;
```


## Implemented Interfaces
MixingManager implements the following interfaces. That means all methods defined in these interfaces are also available in MixingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[MixingRecipe](/mods/createtweaker/recipe/type/MixingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
MixingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a mixing recipe that outputs FluidStacks.

Return Type: void

```zenscript
// MixingManager.addRecipe(name as string, heat as HeatCondition, outputs as IFluidStack[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:mixing>.addRecipe("fluid_mixed", <constant:create:heat_condition:none>, [<fluid:minecraft:water> * 200], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

| Parameter   | Type                                                                     | Description                              | Optional | DefaultValue                                   |
| ----------- | ------------------------------------------------------------------------ | ---------------------------------------- | -------- | ---------------------------------------------- |
| name        | string                                                                   | The name of the recipe.                  | false    |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                | The required heat of the recipe.         | false    |                                                |
| outputs     | [IFluidStack](/forge/api/fluid/IFluidStack)[]                            | The output FluidStacks of the recipe.    | false    |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The item inputs of the recipe.           | false    |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                    | The optional fluid inputs of the recipe. | true     | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                      | The duration of the recipe in ticks.     | true     | 100                                            |


:::

:::group{name=addRecipe}

Adds a mixing recipe that outputs ItemStacks.

Return Type: void

```zenscript
// MixingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:mixing>.addRecipe("mixed", <constant:create:heat_condition:heated>, [<item:minecraft:diamond> % 50, <item:minecraft:apple>, (<item:minecraft:dirt> * 2) % 12], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

| Parameter   | Type                                                                                                                | Description                              | Optional | DefaultValue                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- | ---------------------------------------------- |
| name        | string                                                                                                              | The name of the recipe.                  | false    |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                                                           | The required heat of the recipe.         | false    |                                                |
| outputs     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The output ItemStacks of the recipe.     | false    |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[]                                            | The item inputs of the recipe.           | false    |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                                                               | The optional fluid inputs of the recipe. | true     | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                                                                 | The duration of the recipe in ticks.     | true     | 100                                            |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MixingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:mixing>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MixingManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MixingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:mixing>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MixingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
MixingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parameter     | Type                                                                                                                           | Description             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes recipes based on the output fluid.

Return Type: void

```zenscript
// MixingManager.remove(output as FluidIngredient) as void

<recipetype:create:mixing>.remove(<fluid:minecraft:water>);
```

| Parameter | Type                                                | Description                                |
| --------- | --------------------------------------------------- | ------------------------------------------ |
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output fluid of the recipes to remove. |


:::

:::group{name=remove}

Return Type: void

```zenscript
MixingManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// MixingManager.removeAll() as void

<recipetype:create:mixing>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
MixingManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
MixingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| exclude   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
MixingManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
MixingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| exclude   | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Properties

| 이름         | Type                                                          | Has Getter | Has Setter | Description             |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | No Description Provided |

