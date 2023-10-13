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

```zenscript
EmptyingManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds an emptying recipe.

```zenscript
// EmptyingManager.addRecipe(name as string, outputItem as Percentaged<IItemStack>, outputFluid as IFluidStack, inputContainer as IIngredient, duration as int)

<recipetype:create:emptying>.addRecipe("emptier", <item:minecraft:diamond>, <fluid:minecraft:water>, <item:minecraft:dirt>, 200);
```

|   Parameter    |                                                 Type                                                  |                        Description                        | Optional | Default Value |
|----------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------|---------------|
| name           | string                                                                                                | The name of the recipe.                                   | false    |               |
| outputItem     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output item of the recipe.                            | false    |               |
| outputFluid    | [IFluidStack](/vanilla/api/fluid/IFluidStack)                                                         | The output fluid of the recipe.                           | false    |               |
| inputContainer | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                    | The input container of the recipe (what is being filled). | false    |               |
| duration       | int                                                                                                   | The duration of the recipe in ticks (defaults to 100).    | true     | 100           |


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

| Parameter |  Type  |
|-----------|--------|
| name      | string |


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

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
EmptyingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes emptying recipes based on the output FluidStack.

```zenscript
// EmptyingManager.remove(output as FluidIngredient)

<recipetype:create:emptying>.remove(<fluid:minecraft:water>);
```

| Parameter |                        Type                         |             Description              |
|-----------|-----------------------------------------------------|--------------------------------------|
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output FluidStack of the recipe. |


:::

:::group{name=remove}

```zenscript
EmptyingManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// EmptyingManager.removeAll()

<recipetype:create:emptying>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
EmptyingManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
EmptyingManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
EmptyingManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
EmptyingManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

