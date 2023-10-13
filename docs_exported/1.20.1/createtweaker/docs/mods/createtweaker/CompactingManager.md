# CompactingManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.CompactingManager;
```


## Implemented Interfaces
CompactingManager implements the following interfaces. That means all methods defined in these interfaces are also available in CompactingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[CompactingRecipe](/mods/createtweaker/recipe/type/CompactingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
CompactingManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Compactor that outputs FluidStacks.

```zenscript
// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as IFluidStack[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int)

<recipetype:create:compacting>.addRecipe("fluid_compacted", <constant:create:heat_condition:none>, [<fluid:minecraft:water> * 200], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

|  Parameter  |                                   Type                                   |               Description                | Optional |                 Default Value                  |
|-------------|--------------------------------------------------------------------------|------------------------------------------|----------|------------------------------------------------|
| name        | string                                                                   | The name of the recipe.                  | false    |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                | The required heat of the recipe.         | false    |                                                |
| outputs     | [IFluidStack](/vanilla/api/fluid/IFluidStack)[]                          | The output FluidStacks of the recipe.    | false    |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The item inputs of the recipe.           | false    |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                    | The optional fluid inputs of the recipe. | true     | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                      | The duration of the recipe in ticks.     | true     | 100                                            |


:::

:::group{name=addRecipe}

Adds a recipe to the Compactor that outputs ItemStacks.

```zenscript
// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int)

<recipetype:create:compacting>.addRecipe("compacted", <constant:create:heat_condition:heated>, [<item:minecraft:diamond> % 50, <item:minecraft:apple>, (<item:minecraft:dirt> * 2) % 12], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

|  Parameter  |                                                  Type                                                   |               Description                | Optional |                 Default Value                  |
|-------------|---------------------------------------------------------------------------------------------------------|------------------------------------------|----------|------------------------------------------------|
| name        | string                                                                                                  | The name of the recipe.                  | false    |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                                               | The required heat of the recipe.         | false    |                                                |
| outputs     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The output ItemStacks of the recipe.     | false    |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[]                                | The item inputs of the recipe.           | false    |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                                                   | The optional fluid inputs of the recipe. | true     | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                                                     | The duration of the recipe in ticks.     | true     | 100                                            |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CompactingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:compacting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CompactingManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CompactingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:compacting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CompactingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
CompactingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes a recipe based on the output [IFluidStack](/vanilla/api/fluid/IFluidStack).

```zenscript
// CompactingManager.remove(output as FluidIngredient)

<recipetype:create:compacting>.remove(<fluid:minecraft:water>);
```

| Parameter |                        Type                         |      Description      |
|-----------|-----------------------------------------------------|-----------------------|
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output FluidStack |


:::

:::group{name=remove}

```zenscript
CompactingManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CompactingManager.removeAll()

<recipetype:create:compacting>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CompactingManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CompactingManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CompactingManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CompactingManager.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

