# CuttingManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.CuttingManager;
```


## Implemented Interfaces
CuttingManager implements the following interfaces. That means all methods defined in these interfaces are also available in CuttingManager

- [IProcessingRecipeManager](/mods/CreateTweaker/IProcessingRecipeManager)&lt;[CuttingRecipe](/mods/CreateTweaker/recipe/type/CuttingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
CuttingManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Cutter.

```zenscript
// CuttingManager.addRecipe(name as string, output as Percentaged<IItemStack>, input as IIngredient, duration as int)

<recipetype:create:cutting>.addRecipe("crushed", <item:minecraft:diamond> % 50, <item:minecraft:glass>, 200);
```

| Parameter |                                                 Type                                                  |                      Description                       | Optional | Default Value |
|-----------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------|---------------|
| name      | string                                                                                                | The name of the recipe.                                | false    |               |
| output    | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The Percentaged IItemStack output.                     | false    |               |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                    | The input of the recipe.                               | false    |               |
| duration  | int                                                                                                   | The duration of the recipe in ticks (defaults to 100). | true     | 100           |


:::

:::group{name=addRecipe}

Adds a recipe to the Cutter.

```zenscript
// CuttingManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], input as IIngredient, duration as int)

<recipetype:create:cutting>.addRecipe("crushed", [<item:minecraft:diamond> % 50, <item:minecraft:apple>, (<item:minecraft:dirt> * 2) % 12], <item:minecraft:glass>, 200);
```

| Parameter |                                                  Type                                                   |                      Description                       | Optional | Default Value |
|-----------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------|---------------|
| name      | string                                                                                                  | The name of the recipe.                                | false    |               |
| outputs   | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The Percentaged IItemStack outputs.                    | false    |               |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | The input of the recipe.                               | false    |               |
| duration  | int                                                                                                     | The duration of the recipe in ticks (defaults to 100). | true     | 100           |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CuttingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:cutting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CuttingManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CuttingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:cutting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CuttingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
CuttingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/CreateTweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

```zenscript
CuttingManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CuttingManager.removeAll()

<recipetype:create:cutting>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CuttingManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CuttingManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CuttingManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CuttingManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

