# Crusher

Allows you to add or remove Crusher recipes.

 Crusher Recipes consist of an input, an output and a list of possible secondary outputs.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Crusher;
```


## Implemented Interfaces
Crusher implements the following interfaces. That means all methods defined in these interfaces are also available in Crusher

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Crusher.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Crusher recipe.

```zenscript
// Crusher.addRecipe(recipePath as string, input as IIngredient, energy as int, mainOutput as IItemStack, additionalOutputs as Percentaged<IItemStack>[])

<recipetype:immersiveengineering:crusher>.addRecipe("tnt_discharge", <item:minecraft:tnt>, 500, <item:minecraft:gunpowder> * 4, <item:minecraft:coal> % 50, <item:minecraft:diamond> % 1);
```

| Parameter         | Type                                                                                                                | Description                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath        | string                                                                                                              | The recipe name, without the resource location |
| input             | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                  | The input ingredient                           |
| energy            | int                                                                                                                 | The total energy required                      |
| mainOutput        | [IItemStack](/vanilla/api/item/IItemStack)                                                                          | The main item that this recipe will return     |
| additionalOutputs | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | All secondary items that can be returned       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Crusher.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:crusher>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Crusher.getRecipeByName(name as string) as T
```

| Parameter | Type   |
| --------- | ------ |
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Crusher.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:crusher>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Crusher.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Crusher.removeAll()

<recipetype:immersiveengineering:crusher>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Crusher.removeByInput(input as IItemStack)
```

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Crusher.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Crusher.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Crusher.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that output the given IIngredient. Removes the recipe as soon as any of the recipe's possible outputs matches the given IIngredient. Includes secondary outputs and chance-based outputs.

```zenscript
// Crusher.removeRecipe(output as IIngredient)

<recipetype:immersiveengineering:crusher>.removeRecipe(<item:immersiveengineering:dust_iron>);
<recipetype:immersiveengineering:crusher>.removeRecipe(<tag:forge:dusts>);
```

| Parameter | Type                                               | Description                                |
| --------- | -------------------------------------------------- | ------------------------------------------ |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The output whose recipes should be removed |


:::


## Properties

| 名称         | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

