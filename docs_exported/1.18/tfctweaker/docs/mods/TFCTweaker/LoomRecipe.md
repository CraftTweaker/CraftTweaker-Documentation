# LoomRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.LoomRecipe;
```


## Implemented Interfaces
LoomRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in LoomRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
LoomRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a loom recipe

```zenscript
// LoomRecipe.addRecipe(name as string, input as IIngredient, output as ItemStackProvider, inputCount as int, stepsRequired as int, inProgressTexture as string)

<recipetype:tfc:loom>.addRecipe("loom_test", <item:minecraft:string>, ItemStackProvider.none(<item:tfc:burlap_cloth>), 10, 10, "tfc:block/burlap");
```

|     Parameter     |                                  Type                                  |        Description        |
|-------------------|------------------------------------------------------------------------|---------------------------|
| name              | string                                                                 | name of the recipe        |
| input             | [IIngredient](/vanilla/api/ingredient/IIngredient)                     | input ingredient          |
| output            | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider) | output item               |
| inputCount        | int                                                                    | how many items are needed |
| stepsRequired     | int                                                                    | the number of steps       |
| inProgressTexture | string                                                                 | in progress texture       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// LoomRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:loom>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
LoomRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// LoomRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:loom>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
LoomRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
LoomRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// LoomRecipe.removeAll()

<recipetype:tfc:loom>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
LoomRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
LoomRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
LoomRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
LoomRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

