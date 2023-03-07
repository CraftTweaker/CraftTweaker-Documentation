# RockKnappingRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.RockKnappingRecipe;
```


## Implemented Interfaces
RockKnappingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in RockKnappingRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
RockKnappingRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a Rock Knapping recipe

```zenscript
// RockKnappingRecipe.addRecipe(name as string, outside_slot_required as boolean, pattern as string[], rocks as IIngredient, output as IItemStack)

<recipetype:tfc:rock_knapping>.addRecipe("rock_test", false, ["XX   ", " XX  ", "  XX ", "   XX", ""], <tag:items:tfc:igneous_extrusive_rock>, <item:tfc:stone/axe_head/igneous_extrusive>);
```

|       Parameter       |                        Type                        |               Description                |
|-----------------------|----------------------------------------------------|------------------------------------------|
| name                  | string                                             | name of the recipe                       |
| outside_slot_required | boolean                                            | should the output slot be required       |
| pattern               | string[]                                           | pattern                                  |
| rocks                 | [IIngredient](/vanilla/api/ingredient/IIngredient) | Rock(s) that be used to knapp the recipe |
| output                | [IItemStack](/vanilla/api/item/IItemStack)         | the output item                          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// RockKnappingRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:rock_knapping>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
RockKnappingRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// RockKnappingRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:rock_knapping>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
RockKnappingRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
RockKnappingRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// RockKnappingRecipe.removeAll()

<recipetype:tfc:rock_knapping>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
RockKnappingRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
RockKnappingRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
RockKnappingRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
RockKnappingRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

