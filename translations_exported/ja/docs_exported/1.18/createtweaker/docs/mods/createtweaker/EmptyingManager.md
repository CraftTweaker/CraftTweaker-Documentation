# EmptyingManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.EmptyingManager;
```


## Implemented Interfaces
EmptyingManager implements the following interfaces. That means all methods defined in these interfaces are also available in EmptyingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[EmptyingRecipe](/mods/createtweaker/recipe/type/EmptyingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
EmptyingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| name      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds an emptying recipe.

Return Type: void

```zenscript
// EmptyingManager.addRecipe(name as string, outputItem as Percentaged<IItemStack>, outputFluid as IFluidStack, inputContainer as IIngredient, duration as int) as void

<recipetype:create:emptying>.addRecipe("emptier", <item:minecraft:diamond>, <fluid:minecraft:water>, <item:minecraft:dirt>, 200);
```

| Parameter      | Type                                                                                                              | Description                                               | Optional | DefaultValue |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------------ |
| name           | string                                                                                                            | The name of the recipe.                                   | false    |              |
| outputItem     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output item of the recipe.                            | false    |              |
| outputFluid    | [IFluidStack](/forge/api/fluid/IFluidStack)                                                                       | The output fluid of the recipe.                           | false    |              |
| inputContainer | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                | The input container of the recipe (what is being filled). | false    |              |
| duration       | int                                                                                                               | The duration of the recipe in ticks (defaults to 100).    | true     | 100          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// EmptyingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:emptying>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
EmptyingManager.getRecipeByName(name as string) as T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// EmptyingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:emptying>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
EmptyingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
EmptyingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parameter     | Type                                                                                                                           | Description             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| name          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes emptying recipes based on the output FluidStack.

Return Type: void

```zenscript
// EmptyingManager.remove(output as FluidIngredient) as void

<recipetype:create:emptying>.remove(<fluid:minecraft:water>);
```

| Parameter | Type                                                | Description                          |
| --------- | --------------------------------------------------- | ------------------------------------ |
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output FluidStack of the recipe. |


:::

:::group{name=remove}

Return Type: void

```zenscript
EmptyingManager.remove(output as IIngredient) as void
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// EmptyingManager.removeAll() as void

<recipetype:create:emptying>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
EmptyingManager.removeByInput(input as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
EmptyingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
EmptyingManager.removeByName(names as string[]) as void
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
EmptyingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

