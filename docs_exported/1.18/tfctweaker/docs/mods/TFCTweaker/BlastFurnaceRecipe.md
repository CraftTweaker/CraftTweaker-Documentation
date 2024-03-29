# BlastFurnaceRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.BlastFurnaceRecipe;
```


## Implemented Interfaces
BlastFurnaceRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnaceRecipe

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
BlastFurnaceRecipe.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe

```zenscript
// BlastFurnaceRecipe.addRecipe(name as string, input as FluidIngredient, catalyst as IIngredient, output as IFluidStack)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", FluidStackIngredient.of(<fluid:tfc:metal/copper>*100);, <tag:items:forge:gems/coal>, <fluid:tfc:metal/bronze>*100);
```

| Parameter |                                  Type                                   |         Description          |
|-----------|-------------------------------------------------------------------------|------------------------------|
| name      | string                                                                  | name of the recipe           |
| input     | [FluidIngredient](/mods/TFCTweaker/Api/Ingredient/FluidStackIngredient) | fluid input                  |
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient)                      | catalyst used for the recipe |
| output    | [IFluidStack](/forge/api/fluid/IFluidStack)                             | fluid output                 |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe, default to 100mb of metal used

```zenscript
// BlastFurnaceRecipe.addRecipe(name as string, input as Metal, catalyst as IIngredient, output as Metal)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", <metal:tfc:copper>, <tag:items:forge:gems/coal>, <metal:tfc:bronze>);
```

| Parameter |                        Type                        |         Description          |
|-----------|----------------------------------------------------|------------------------------|
| name      | string                                             | name of the recipe           |
| input     | [Metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient) | catalyst used for the recipe |
| output    | [Metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe

```zenscript
// BlastFurnaceRecipe.addRecipe(name as string, input as Metal, amount as int, catalyst as IIngredient, output as Metal, outputAmount as int)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", <metal:tfc:copper>, 100, <tag:items:forge:gems/coal>, <metal:tfc:bronze>, 50);
```

|  Parameter   |                        Type                        |         Description          |
|--------------|----------------------------------------------------|------------------------------|
| name         | string                                             | name of the recipe           |
| input        | [Metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| amount       | int                                                | amount of metal used         |
| catalyst     | [IIngredient](/vanilla/api/ingredient/IIngredient) | catalyst used for the recipe |
| output       | [Metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| outputAmount | int                                                | amount of metal received     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnaceRecipe.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:blast_furnace>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BlastFurnaceRecipe.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnaceRecipe.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:blast_furnace>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnaceRecipe.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnaceRecipe.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BlastFurnaceRecipe.removeAll()

<recipetype:tfc:blast_furnace>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BlastFurnaceRecipe.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnaceRecipe.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnaceRecipe.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnaceRecipe.removeByRegex(regex as string, exclude as Predicate<string>)
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

