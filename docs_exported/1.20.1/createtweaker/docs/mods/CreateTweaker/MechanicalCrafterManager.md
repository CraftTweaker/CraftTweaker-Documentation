# MechanicalCrafterManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.MechanicalCrafterManager;
```


## Implemented Interfaces
MechanicalCrafterManager implements the following interfaces. That means all methods defined in these interfaces are also available in MechanicalCrafterManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
MechanicalCrafterManager.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addMirroredRecipe}

Adds a mirrored recipe to the Mechanical Crafter.

```zenscript
// MechanicalCrafterManager.addMirroredRecipe(name as string, output as IItemStack, ingredients as IIngredient[][])

<recipetype:create:mechanical_crafting>.addMirroredRecipe("mirrorized", <item:minecraft:glass>, [[<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>], [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>]]);
```

|  Parameter  |                          Type                          |          Description           |
|-------------|--------------------------------------------------------|--------------------------------|
| name        | string                                                 | The name of the recipe.        |
| output      | [IItemStack](/vanilla/api/item/IItemStack)             | The output of the recipe.      |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | The ingredients of the recipe. |


:::

:::group{name=addRecipe}

Adds a recipe to the Mechanical Crafter.

```zenscript
// MechanicalCrafterManager.addRecipe(name as string, output as IItemStack, ingredients as IIngredient[][])

<recipetype:create:mechanical_crafting>.addRecipe("mechanized", <item:minecraft:diamond>, [[<item:minecraft:dirt>, <item:minecraft:air>, <item:minecraft:dirt>], [<item:minecraft:air>, <item:minecraft:dirt>, <item:minecraft:air>]]);
```

|  Parameter  |                          Type                          |          Description           |
|-------------|--------------------------------------------------------|--------------------------------|
| name        | string                                                 | The name of the recipe.        |
| output      | [IItemStack](/vanilla/api/item/IItemStack)             | The output of the recipe.      |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | The ingredients of the recipe. |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MechanicalCrafterManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:mechanical_crafting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MechanicalCrafterManager.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MechanicalCrafterManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:mechanical_crafting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MechanicalCrafterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
MechanicalCrafterManager.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// MechanicalCrafterManager.removeAll()

<recipetype:create:mechanical_crafting>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
MechanicalCrafterManager.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
MechanicalCrafterManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
MechanicalCrafterManager.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
MechanicalCrafterManager.removeByRegex(regex as string, exclude as Predicate<string>)
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

