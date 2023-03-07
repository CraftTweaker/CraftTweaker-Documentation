# InstantBarrelRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.InstantBarrelRecipe;
```


## Implemented Interfaces
InstantBarrelRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in InstantBarrelRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
InstantBarrelRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add an instant barrel recipe

```zenscript
InstantBarrelRecipe.addRecipe(name as string, input as IIngredientWithAmount, inputFluid as FluidIngredient, output as ItemStackProvider, outputFluid as IFluidStack, event as SoundEvent)
```

|  Parameter  |                                  Type                                   |                           Description                            | Optional |
|-------------|-------------------------------------------------------------------------|------------------------------------------------------------------|----------|
| name        | string                                                                  | name of the recipe                                               | false    |
| input       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)  | item input                                                       | false    |
| inputFluid  | [FluidIngredient](/mods/TFCTweaker/Api/Ingredient/FluidStackIngredient) | fluid input, can be empty                                        | false    |
| output      | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)  | item output                                                      | false    |
| outputFluid | [IFluidStack](/forge/api/fluid/IFluidStack)                             | fluid ouput                                                      | false    |
| event       | [SoundEvent](/vanilla/api/sound/SoundEvent)                             | the sound to play when it is done, default to BREWING_STAND_BREW | true     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// InstantBarrelRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:barrel_instant>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
InstantBarrelRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// InstantBarrelRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:barrel_instant>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
InstantBarrelRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
InstantBarrelRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// InstantBarrelRecipe.removeAll()

<recipetype:tfc:barrel_instant>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
InstantBarrelRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
InstantBarrelRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
InstantBarrelRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
InstantBarrelRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

