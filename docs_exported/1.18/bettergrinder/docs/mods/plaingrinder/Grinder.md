# Grinder

Contrary to what this file indicates, the mod adding support to the Grinder is **Better Grinder**, not PlainGrinder.

The mod can be found [here](https://www.curseforge.com/minecraft/mc-mods/better-grinder)

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.plaingrinder.Grinder;
```


## Implemented Interfaces
Grinder implements the following interfaces. That means all methods defined in these interfaces are also available in Grinder

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Grinder.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}



```zenscript
// Grinder.addRecipe(name as string, input as IIngredient[], result as IItemStack, firstChance as float, optional as IItemStack, optionalChance as float)

<recipetype:plaingrinder:grinder>.addRecipe("recipe_name_as_string",, [<item:minecraft:wooden_axe>], <item:minecraft:clock> * 2, 1.0, <item:minecraft:powered_rail>, 0.5);
```

|   Parameter    |                         Type                         |             Description              | Optional | Default Value |
|----------------|------------------------------------------------------|--------------------------------------|----------|---------------|
| name           | string                                               | The unique name of the recipe to add | false    |               |
| input          | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | The inputs to consume                | false    |               |
| result         | [IItemStack](/vanilla/api/item/IItemStack)           | The primary result to output         | false    |               |
| firstChance    | float                                                | The chance of the result to appear   | true     | 1.0           |
| optional       | [IItemStack](/vanilla/api/item/IItemStack)           | An optional secondary item to output | true     |               |
| optionalChance | float                                                | The chance of the secondary result   | true     | 0.0           |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Grinder.getAllRecipes() as stdlib.List<T>

<recipetype:plaingrinder:grinder>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Grinder.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Grinder.getRecipeMap() as T[ResourceLocation]

<recipetype:plaingrinder:grinder>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Grinder.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Grinder.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Grinder.removeAll()

<recipetype:plaingrinder:grinder>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Grinder.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Grinder.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Grinder.removeByName(name as string)
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=removeByRegex}

```zenscript
Grinder.removeByRegex(regex as string, exclude as Predicate<string>)
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

