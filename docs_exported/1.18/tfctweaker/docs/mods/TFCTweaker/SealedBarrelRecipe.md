# SealedBarrelRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.SealedBarrelRecipe;
```


## Implemented Interfaces
SealedBarrelRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in SealedBarrelRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
SealedBarrelRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add an instant barrel recipe

```zenscript
SealedBarrelRecipe.addRecipe(name as string, duration as int, input as IIngredientWithAmount, fluidIngredient as FluidIngredient, output as ItemStackProvider, outputFluid as IFluidStack, event as SoundEvent, onSeal as ItemStackProvider, onUnseal as ItemStackProvider)
```

|    Parameter    |                                  Type                                   |                           Description                            |
|-----------------|-------------------------------------------------------------------------|------------------------------------------------------------------|
| name            | string                                                                  | name of the recipe                                               |
| duration        | int                                                                     | how long until the recipe is done(in hours)                      |
| input           | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)  | item input                                                       |
| fluidIngredient | [FluidIngredient](/mods/TFCTweaker/Api/Ingredient/FluidStackIngredient) | fluid input, can be empty                                        |
| output          | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)  | item output                                                      |
| outputFluid     | [IFluidStack](/forge/api/fluid/IFluidStack)                             | fluid ouput                                                      |
| event           | [SoundEvent](/vanilla/api/sound/SoundEvent)                             | the sound to play when it is done, default to BREWING_STAND_BREW |
| onSeal          | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)  | Call this on seal                                                |
| onUnseal        | [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)  | Call this on unseal                                              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SealedBarrelRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:barrel_sealed>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SealedBarrelRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SealedBarrelRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:barrel_sealed>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SealedBarrelRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
SealedBarrelRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// SealedBarrelRecipe.removeAll()

<recipetype:tfc:barrel_sealed>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
SealedBarrelRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
SealedBarrelRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
SealedBarrelRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
SealedBarrelRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

