# DeployerApplicationManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.DeployerApplicationManager;
```


## Implemented Interfaces
DeployerApplicationManager implements the following interfaces. That means all methods defined in these interfaces are also available in DeployerApplicationManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[DeployerApplicationRecipe](/mods/createtweaker/recipe/type/DeployerApplicationRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
DeployerApplicationManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a new deployer application recipe.

```zenscript
// DeployerApplicationManager.addRecipe(name as string, processedItem as IIngredient, heldItem as IIngredient, outputs as Percentaged<IItemStack>[], keepHeldItem as boolean)

<recipetype:create:deploying>.addRecipe("name", <item:minecraft:air>, <item:minecraft:diamond>, [<item:minecraft:dirt> % 50], true);
```

|   Parameter   |                                                  Type                                                   |           Description            | Optional | Default Value |
|---------------|---------------------------------------------------------------------------------------------------------|----------------------------------|----------|---------------|
| name          | string                                                                                                  | The name of the recipe           | false    |               |
| processedItem | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | The item to be deployed onto     | false    |               |
| heldItem      | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | The item to deploy with          | false    |               |
| outputs       | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The output of the recipe         | false    |               |
| keepHeldItem  | boolean                                                                                                 | Should the held item be consumed | true     | false         |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// DeployerApplicationManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:deploying>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
DeployerApplicationManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// DeployerApplicationManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:deploying>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
DeployerApplicationManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
DeployerApplicationManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

```zenscript
DeployerApplicationManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// DeployerApplicationManager.removeAll()

<recipetype:create:deploying>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
DeployerApplicationManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
DeployerApplicationManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
DeployerApplicationManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
DeployerApplicationManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

