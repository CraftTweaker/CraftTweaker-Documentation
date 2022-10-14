# Mixer

Allows you to add or remove Mixer recipes.

 Mixer Recipes consist of a fluid input, multiple item inputs and a fluid output.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Mixer;
```


## Implemented Interfaces
Mixer implements the following interfaces. That means all methods defined in these interfaces are also available in Mixer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Mixer.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Mixer. Make sure that the provided Tag is a valid fluid tag.

 Mixer recipes will always convert 1mB of the input fluid to 1mB of the output fluid. The `amount` parameter specifies for how many mB the given ingredients last

```zenscript
// Mixer.addRecipe(recipePath as string, fluidInput as MCTag, inputItems as IIngredientWithAmount[], energy as int, output as Fluid, amount as int)

<recipetype:immersiveengineering:mixer>.addRecipe("grow_creosote_oil", <tag:minecraft:water>, [<item:minecraft:oak_sapling>, <item:minecraft:bone_meal> * 4, <item:immersiveengineering:creosote_bucket>], 5000, <fluid:immersiveengineering:creosote>.fluid, 8000);
```

| Parameter  | Type                                                                     | Description                                                              |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| recipePath | string                                                                   | The recipe name, without the resource location                           |
| fluidInput | [MCTag](/vanilla/api/tag/MCTag)                                          | The fluid input as Tag                                                   |
| inputItems | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The required input items                                                 |
| energy     | int                                                                      | The total energy required                                                |
| output     | [Fluid](/vanilla/api/fluid/Fluid)                                        | The produced output fluidStack                                           |
| amount     | int                                                                      | The amount of fluid that can be converted per set of input items (in mB) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Mixer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:mixer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Mixer.getRecipeByName(name as string) as T
```

| Parameter | Type   |
| --------- | ------ |
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Mixer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:mixer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Mixer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Mixer.removeAll()

<recipetype:immersiveengineering:mixer>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Mixer.removeByInput(input as IItemStack)
```

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Mixer.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Mixer.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Mixer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| 除外する      | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluid as Fluid)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete>.fluid);
```

| Parameter | Type                              | Description                |
| --------- | --------------------------------- | -------------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluidStack as IFluidStack)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete> * 500);
```

| Parameter  | Type                                        | Description          |
| ---------- | ------------------------------------------- | -------------------- |
| fluidStack | [IFluidStack](/forge/api/fluid/IFluidStack) | The output to remove |


:::


## Properties

| 名称         | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

