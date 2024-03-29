# Fermenter

Allows you to add or remove Fermenter recipes.
 
 Fermenter Recipes consist of an input, a fluid output and an item output either fluid or item output can be empty.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Fermenter;
```


## Implemented Interfaces
Fermenter implements the following interfaces. That means all methods defined in these interfaces are also available in Fermenter

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Fermenter.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Fermenter recipe.
 The overload for only the fluid Output

```zenscript
// Fermenter.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, fluidOutput as IFluidStack)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_extract_water", <item:minecraft:wooden_hoe>, 1000, <fluid:minecraft:water> * 100);
```

|  Parameter  |                                  Type                                  |                  Description                   |
|-------------|------------------------------------------------------------------------|------------------------------------------------|
| recipePath  | string                                                                 | The recipe name, without the resource location |
| input       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                             |
| energy      | int                                                                    | The total energy required for this recipe      |
| fluidOutput | [IFluidStack](/forge/api/fluid/IFluidStack)                            | The fluid output (can be empty)                |


:::

:::group{name=addRecipe}

Adds a Fermenter recipe.
 The overload for only the item output

```zenscript
// Fermenter.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, itemOutput as IItemStack)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_hoe", <item:minecraft:wooden_shovel>, 1000, <item:minecraft:stone_shovel>);
```

| Parameter  |                                  Type                                  |                  Description                   |
|------------|------------------------------------------------------------------------|------------------------------------------------|
| recipePath | string                                                                 | The recipe name, without the resource location |
| input      | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                             |
| energy     | int                                                                    | The total energy required for this recipe      |
| itemOutput | [IItemStack](/vanilla/api/item/IItemStack)                             | The item output (can be empty)                 |


:::

:::group{name=addRecipe}

Adds a Fermenter recipe.
 You need to provide an item output, a fluid output, or both

```zenscript
// Fermenter.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, itemOutput as IItemStack, fluidOutput as IFluidStack)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_sword", <item:minecraft:wooden_sword>, 1000, <item:minecraft:stone_sword>, <fluid:minecraft:water> * 100);
```

|  Parameter  |                                  Type                                  |                  Description                   |
|-------------|------------------------------------------------------------------------|------------------------------------------------|
| recipePath  | string                                                                 | The recipe name, without the resource location |
| input       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                             |
| energy      | int                                                                    | The total energy required for this recipe      |
| itemOutput  | [IItemStack](/vanilla/api/item/IItemStack)                             | The item output (can be empty)                 |
| fluidOutput | [IFluidStack](/forge/api/fluid/IFluidStack)                            | The fluid output (can be empty)                |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Fermenter.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:fermenter>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Fermenter.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Fermenter.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:fermenter>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Fermenter.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Fermenter.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Fermenter.removeAll()

<recipetype:immersiveengineering:fermenter>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Fermenter.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Fermenter.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Fermenter.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Fermenter.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return the given fluidStack.
 Takes stack sizes into account!

```zenscript
// Fermenter.removeRecipe(output as IFluidStack)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<fluid:immersiveengineering:ethanol> * 80);
```

| Parameter |                    Type                     |     Description     |
|-----------|---------------------------------------------|---------------------|
| output    | [IFluidStack](/forge/api/fluid/IFluidStack) | The fluid to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return the given output fluid.
 Since it uses a fluid and not a fluidStack it does not compare stack sizes

```zenscript
// Fermenter.removeRecipe(outputFluid as Fluid)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<fluid:immersiveengineering:ethanol>.fluid);
```

|  Parameter  |               Type                |     Description     |
|-------------|-----------------------------------|---------------------|
| outputFluid | [Fluid](/vanilla/api/fluid/Fluid) | The fluid to remove |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

