# PotRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.PotRecipe;
```


## Implemented Interfaces
PotRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in PotRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
PotRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addPotRecipe}

Add a pot recipe

```zenscript
// PotRecipe.addPotRecipe(name as string, ingredients as IIngredient[], fluid as FluidIngredient, duration as int, minTemp as float, outputFluid as IFluidStack)

<recipetype:tfc:pot>.addPotRecipe("pot_test", [<tag:items:minecraft:sand>], FluidIngredient.of(<fluid:tfc:salt_water>), 4, 200, FluidIngredient.of(<fluid:minecraft:water>));
```

|  Parameter  |                                  Type                                   |           Description           |
|-------------|-------------------------------------------------------------------------|---------------------------------|
| name        | string                                                                  | name of the recipe              |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[]                    | array of input ingredient       |
| fluid       | [FluidIngredient](/mods/TFCTweaker/Api/Ingredient/FluidStackIngredient) | input fluid                     |
| duration    | int                                                                     | time the recipe take            |
| minTemp     | float                                                                   | temp min required by the recipe |
| outputFluid | [IFluidStack](/forge/api/fluid/IFluidStack)                             | output fluid                    |


:::

:::group{name=addPotRecipe}

Add a pot recipe

```zenscript
// PotRecipe.addPotRecipe(name as string, ingredients as IIngredient[], fluid as FluidIngredient, duration as int, minTemp as float, outputFluid as IFluidStack, output as IItemStack[])

<recipetype:tfc:pot>.addPotRecipe("pot_test", [<tag:items:minecraft:sand>], FluidIngredient.of(<fluid:tfc:salt_water>), 4, 200, FluidIngredient.of(<fluid:minecraft:water>), [<item:minecraft:dirt>]);
```

|  Parameter  |                                  Type                                   |           Description           |
|-------------|-------------------------------------------------------------------------|---------------------------------|
| name        | string                                                                  | name of the recipe              |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[]                    | ingredients                     |
| fluid       | [FluidIngredient](/mods/TFCTweaker/Api/Ingredient/FluidStackIngredient) | input fluid                     |
| duration    | int                                                                     | duration                        |
| minTemp     | float                                                                   | temp min required by the recipe |
| outputFluid | [IFluidStack](/forge/api/fluid/IFluidStack)                             | output fluid                    |
| output      | [IItemStack](/vanilla/api/item/IItemStack)[]                            | Fluid output fluid              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// PotRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:pot>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
PotRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// PotRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:pot>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
PotRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
PotRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// PotRecipe.removeAll()

<recipetype:tfc:pot>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
PotRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
PotRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
PotRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
PotRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

