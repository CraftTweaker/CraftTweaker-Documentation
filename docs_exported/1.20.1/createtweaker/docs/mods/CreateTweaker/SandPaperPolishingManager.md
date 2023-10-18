# SandPaperPolishingManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.SandPaperPolishingManager;
```


## Implemented Interfaces
SandPaperPolishingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SandPaperPolishingManager

- [IProcessingRecipeManager](/mods/CreateTweaker/IProcessingRecipeManager)&lt;[SandPaperPolishingRecipe](/mods/CreateTweaker/recipe/type/SandPaperPolishingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
SandPaperPolishingManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a sand paper polishing recipe.

```zenscript
// SandPaperPolishingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int)

<recipetype:create:sandpaper_polishing>.addRecipe("polished", <item:minecraft:diamond> % 50, <item:minecraft:dirt> * 5, 200);
```

| Parameter |                                                 Type                                                  |                   Description                   | Optional | Default Value |
|-----------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------|----------|---------------|
| name      | string                                                                                                | The name of the recipe.                         | false    |               |
| output    | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output of the recipe.                       | false    |               |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                    | The input of the recipe.                        | false    |               |
| duration  | int                                                                                                   | The duration of the recipe (default 100 ticks). | true     | 100           |


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

| Parameter |  Type  |
|-----------|--------|
| name      | string |


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

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
SandPaperPolishingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

```zenscript
SandPaperPolishingManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// SandPaperPolishingManager.removeAll()

<recipetype:create:sandpaper_polishing>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
SandPaperPolishingManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
SandPaperPolishingManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
SandPaperPolishingManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
SandPaperPolishingManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

