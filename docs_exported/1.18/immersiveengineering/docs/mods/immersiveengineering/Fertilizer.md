# Fertilizer

Allows you to add or remove Fertilizers from the Garden Cloche
 
 A Fertilizer consists of an ingredient and a fertilizer value

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Fertilizer;
```


## Implemented Interfaces
Fertilizer implements the following interfaces. That means all methods defined in these interfaces are also available in Fertilizer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addFertilizer}

Adds the fertilizer as possible fertilizer

```zenscript
Fertilizer.addFertilizer(recipePath as string, fertilizer as IIngredient, growthModifier as float)
```

|   Parameter    |                        Type                        |                     Description                      |
|----------------|----------------------------------------------------|------------------------------------------------------|
| recipePath     | string                                             | The recipe name, without the resource location       |
| fertilizer     | [IIngredient](/vanilla/api/ingredient/IIngredient) | The fertilizer to be added                           |
| growthModifier | float                                              | The value this fertilizer gives in the garden cloche |


:::

:::group{name=addJsonRecipe}

```zenscript
Fertilizer.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Fertilizer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:fertilizer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Fertilizer.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Fertilizer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:fertilizer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Fertilizer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Fertilizer.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Fertilizer.removeAll()

<recipetype:immersiveengineering:fertilizer>.removeAll();
```

:::

:::group{name=removeByModid}

```zenscript
Fertilizer.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Fertilizer.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Fertilizer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeFertilizer}

Removes a given fertilizer.
 Will remove all fertilizers for which this IItemStack matches
 
 In other words, if a fertilizer uses a Tag ingredient, you can remove it by providing any item with that tag.

```zenscript
// Fertilizer.removeFertilizer(fertilizer as IItemStack)

<recipetype:immersiveengineering:fertilizer>.removeFertilizer(<item:minecraft:bone_meal>);
```

| Parameter  |                    Type                    |         Description          |
|------------|--------------------------------------------|------------------------------|
| fertilizer | [IItemStack](/vanilla/api/item/IItemStack) | The fertilizer to be removed |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

