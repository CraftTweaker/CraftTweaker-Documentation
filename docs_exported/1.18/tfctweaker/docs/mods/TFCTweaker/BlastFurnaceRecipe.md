# BlastFurnace

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.BlastFurnace;
```


## Implemented Interfaces
BlastFurnace implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnace

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
BlastFurnace.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe

```zenscript
// BlastFurnace.addRecipe(name as string, input as FluidIngredient, catalyst as IIngredient, output as IFluidStack)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", FluidStackIngredient.of(<fluid:tfc:metal/copper>*100);, <tag:items:forge:gems/coal>, <fluid:tfc:metal/bronze>*100);
```

| Parameter |                             Type                             |         Description          |
|-----------|--------------------------------------------------------------|------------------------------|
| name      | string                                                       | name of the recipe           |
| input     | [FluidIngredient](/mods/TFCTweaker/Api/FluidStackIngredient) | fluid input                  |
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient)           | catalyst used for the recipe |
| output    | [IFluidStack](/forge/api/fluid/IFluidStack)                  | fluid output                 |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe, default to 100mb of metal used

```zenscript
// BlastFurnace.addRecipe(name as string, input as metal, catalyst as IIngredient, output as metal)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", <metal:tfc:copper>, <tag:items:forge:gems/coal>, <metal:tfc:bronze>);
```

| Parameter |                        Type                        |         Description          |
|-----------|----------------------------------------------------|------------------------------|
| name      | string                                             | name of the recipe           |
| input     | [metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| catalyst  | [IIngredient](/vanilla/api/ingredient/IIngredient) | catalyst used for the recipe |
| output    | [metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |


:::

:::group{name=addRecipe}

Add a Blast furnace recipe

```zenscript
// BlastFurnace.addRecipe(name as string, input as metal, amount as int, catalyst as IIngredient, output as metal, outputAmount as int)

<recipetype:tfc:blast_furnace>.addRecipe("blast_test", <metal:tfc:copper>, 100, <tag:items:forge:gems/coal>, <metal:tfc:bronze>, 50);
```

|  Parameter   |                        Type                        |         Description          |
|--------------|----------------------------------------------------|------------------------------|
| name         | string                                             | name of the recipe           |
| input        | [metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| amount       | int                                                | amount of metal used         |
| catalyst     | [IIngredient](/vanilla/api/ingredient/IIngredient) | catalyst used for the recipe |
| output       | [metal](/mods/TFCTweaker/Api/Expansion/Metal)      | metal                        |
| outputAmount | int                                                | amount of metal received     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnace.getAllRecipes() as stdlib.List<T>

<recipetype:tfc:blast_furnace>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BlastFurnace.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnace.getRecipeMap() as T[ResourceLocation]

<recipetype:tfc:blast_furnace>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnace.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnace.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BlastFurnace.removeAll()

<recipetype:tfc:blast_furnace>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BlastFurnace.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnace.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnace.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnace.removeByRegex(regex as string, exclude as Predicate<string>)
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

