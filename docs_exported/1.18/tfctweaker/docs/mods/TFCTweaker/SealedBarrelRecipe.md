# SealedBarrel

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.SealedBarrel;
```


## Implemented Interfaces
SealedBarrel implements the following interfaces. That means all methods defined in these interfaces are also available in SealedBarrel

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
SealedBarrel.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add an instant barrel recipe

```zenscript
SealedBarrel.addRecipe(name as string, duration as int, input as invalid, fluidIngredient as invalid, output as invalid, outputFluid as IFluidStack, event as SoundEvent, onSeal as invalid, onUnseal as invalid)
```

|    Parameter    |                    Type                     |                           Description                            |
|-----------------|---------------------------------------------|------------------------------------------------------------------|
| name            | string                                      | name of the recipe                                               |
| duration        | int                                         | how long until the recipe is done(in hours)                      |
| input           | **invalid**                                 | item input                                                       |
| fluidIngredient | **invalid**                                 | fluid input, can be empty                                        |
| output          | **invalid**                                 | item output                                                      |
| outputFluid     | [IFluidStack](/forge/api/fluid/IFluidStack) | fluid ouput                                                      |
| event           | [SoundEvent](/vanilla/api/sound/SoundEvent) | the sound to play when it is done, default to BREWING_STAND_BREW |
| onSeal          | **invalid**                                 | Call this on seal                                                |
| onUnseal        | **invalid**                                 | Call this on unseal                                              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SealedBarrel.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:barrel_sealed>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SealedBarrel.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SealedBarrel.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:barrel_sealed>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SealedBarrel.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
SealedBarrel.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// SealedBarrel.removeAll()

<recipetype:tfc:barrel_sealed>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
SealedBarrel.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
SealedBarrel.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
SealedBarrel.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
SealedBarrel.removeByRegex(regex as string, exclude as Predicate<string>)
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

