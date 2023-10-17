# CuttingBoard

Farmer's Delight Cutting Board recipes.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CuttingBoard;
```


## Implemented Interfaces
CuttingBoard implements the following interfaces. That means all methods defined in these interfaces are also available in CuttingBoard

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
CuttingBoard.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a cutting board recipe.
 The tool ingredient can be a [ToolAction](/forge/api/tool/ToolAction). It will get cast implicitly.
 This allows you to work with any tool that provides that action to Forge.

```zenscript
// CuttingBoard.addRecipe(name as string, input as IIngredient, results as Percentaged<IItemStack>[], tool as IIngredient, sound as string)

<recipetype:farmersdelight:cutting>.addRecipe("cutting_board_test", <item:minecraft:gravel>, [<item:minecraft:flint>], <item:minecraft:string>, "minecraft:block.gravel.break");
```

| Parameter |                                                  Type                                                   |        Description        | Optional |
|-----------|---------------------------------------------------------------------------------------------------------|---------------------------|----------|
| name      | string                                                                                                  | Name of the recipe to add | false    |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | Input ingredient          | false    |
| results   | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | Output items              | false    |
| tool      | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                      | Tool ingredient           | false    |
| sound     | string                                                                                                  | Sound event name          | true     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CuttingBoard.getAllRecipes() as stdlib.List<T>

<recipetype:farmersdelight:cutting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CuttingBoard.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CuttingBoard.getRecipeMap() as T[ResourceLocation]

<recipetype:farmersdelight:cutting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CuttingBoard.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
CuttingBoard.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// CuttingBoard.removeAll()

<recipetype:farmersdelight:cutting>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
CuttingBoard.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
CuttingBoard.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
CuttingBoard.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
CuttingBoard.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Remove a cutting board recipe with multiple outputs.

```zenscript
// CuttingBoard.removeRecipe(outputs as IItemStack[])

<recipetype:farmersdelight:cutting>.removeRecipe([<item:farmersdelight:cooked_salmon_slice> * 2, <item:minecraft:bone_meal>]);
```

| Parameter |                     Type                     | Description  |
|-----------|----------------------------------------------|--------------|
| outputs   | [IItemStack](/vanilla/api/item/IItemStack)[] | Output items |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

