# RockKnapping

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.RockKnapping;
```


## Implemented Interfaces
RockKnapping implements the following interfaces. That means all methods defined in these interfaces are also available in RockKnapping

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
RockKnapping.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a Rock Knapping recipe

```zenscript
// RockKnapping.addRecipe(name as string, outside_slot_required as boolean, pattern as string[], rocks as IIngredient, output as IItemStack)

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
// RockKnapping.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:rock_knapping>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
RockKnapping.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// RockKnapping.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:rock_knapping>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
RockKnapping.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
RockKnapping.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// RockKnapping.removeAll()

<recipetype:tfc:rock_knapping>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
RockKnapping.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
RockKnapping.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
RockKnapping.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
RockKnapping.removeByRegex(regex as string, exclude as Predicate<string>)
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

