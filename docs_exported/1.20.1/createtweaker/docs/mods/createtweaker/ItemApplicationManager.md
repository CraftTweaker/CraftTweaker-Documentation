# ItemApplicationManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.ItemApplicationManager;
```


## Implemented Interfaces
ItemApplicationManager implements the following interfaces. That means all methods defined in these interfaces are also available in ItemApplicationManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[ItemApplicationRecipe](/mods/createtweaker/recipe/type/ItemApplicationRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

```zenscript
ItemApplicationManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a new item application recipe.

```zenscript
// ItemApplicationManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], block as IIngredient, heldItem as IIngredient, keepHeldItem as boolean)

<recipetype:create:item_application>.addRecipe("name", [<item:minecraft:dirt> % 50, <item:minecraft:diamond>], <item:minecraft:diamond_block>, <item:minecraft:emerald>, true);
```

|  Parameter   |                                                  Type                                                   |            Description             | Optional | Default Value |
|--------------|---------------------------------------------------------------------------------------------------------|------------------------------------|----------|---------------|
| name         | string                                                                                                  | The name of the recipe.            | false    |               |
| outputs      | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The recipe outputs                 | false    |               |
| block        | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | The block to be applied on         | false    |               |
| heldItem     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | The item that needs to be held     | false    |               |
| keepHeldItem | boolean                                                                                                 | Should the item be consumed or not | true     | false         |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ItemApplicationManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:item_application>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ItemApplicationManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ItemApplicationManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:item_application>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ItemApplicationManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

```zenscript
ItemApplicationManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>)
```

|   Parameter   |                                                  Type                                                  |       Description       |
|---------------|--------------------------------------------------------------------------------------------------------|-------------------------|
| name          | string                                                                                                 | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

```zenscript
ItemApplicationManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// ItemApplicationManager.removeAll()

<recipetype:create:item_application>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
ItemApplicationManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
ItemApplicationManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
ItemApplicationManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
ItemApplicationManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

