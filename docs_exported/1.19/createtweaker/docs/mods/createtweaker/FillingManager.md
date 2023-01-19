# FillingManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.FillingManager;
```


## Implemented Interfaces
FillingManager implements the following interfaces. That means all methods defined in these interfaces are also available in FillingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[FillingRecipe](/mods/createtweaker/recipe/type/FillingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
FillingManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a filling recipe.

```zenscript
// FillingManager.addRecipe(name as string, output as Percentaged<IItemStack>, inputContainer as IIngredient, inputFluid as FluidIngredient, duration as int)

<recipetype:create:filling>.addRecipe("emptier", <item:minecraft:diamond>, <item:minecraft:dirt>, <fluid:minecraft:water>, 200);
```

|   Parameter    |                                                 Type                                                  |                        Description                        | Optional | Default Value |
|----------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------|---------------|
| name           | string                                                                                                | The name of the recipe.                                   | false    |               |
| output         | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output item of the recipe.                            | false    |               |
| inputContainer | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                    | The input container of the recipe (what is being filled). | false    |               |
| inputFluid     | [FluidIngredient](/forge/api/fluid/FluidIngredient)                                                   | The input fluid of the recipe.                            | false    |               |
| duration       | int                                                                                                   | The duration of the recipe in ticks (defaults to 100).    | true     | 100           |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// FillingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:filling>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
FillingManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// FillingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:filling>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
FillingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
FillingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

```zenscript
FillingManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// FillingManager.removeAll()

<recipetype:create:filling>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
FillingManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
FillingManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
FillingManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
FillingManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

