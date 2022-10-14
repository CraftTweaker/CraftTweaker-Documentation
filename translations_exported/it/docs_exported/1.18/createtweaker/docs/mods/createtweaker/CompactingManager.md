# CompactingManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.CompactingManager;
```


## Interfacce Implementate
CompactingManager implements the following interfaces. That means all methods defined in these interfaces are also available in CompactingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[CompactingRecipe](/mods/createtweaker/recipe/type/CompactingRecipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
CompactingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds a recipe to the Compactor that outputs FluidStacks.

Return Type: void

```zenscript
// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as IFluidStack[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:compacting>.addRecipe("fluid_compacted", <constant:create:heat_condition:none>, [<fluid:minecraft:water> * 200], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

| Parametro   | Tipo                                                                     | Descrizione                              | Optional | DefaultValue                                   |
| ----------- | ------------------------------------------------------------------------ | ---------------------------------------- | -------- | ---------------------------------------------- |
| nome        | string                                                                   | The name of the recipe.                  | no       |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                | The required heat of the recipe.         | no       |                                                |
| outputs     | [IFluidStack](/forge/api/fluid/IFluidStack)[]                            | The output FluidStacks of the recipe.    | no       |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The item inputs of the recipe.           | no       |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                    | The optional fluid inputs of the recipe. | sì       | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                      | The duration of the recipe in ticks.     | sì       | 100                                            |


:::

:::group{name=addRecipe}

Adds a recipe to the Compactor that outputs ItemStacks.

Return Type: void

```zenscript
// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:compacting>.addRecipe("compacted", <constant:create:heat_condition:heated>, [<item:minecraft:diamond> % 50, <item:minecraft:apple>, (<item:minecraft:dirt> * 2) % 12], [<item:minecraft:glass> * 2], [<fluid:minecraft:water> * 250], 200);
```

| Parametro   | Tipo                                                                                                                | Descrizione                              | Optional | DefaultValue                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- | ---------------------------------------------- |
| nome        | string                                                                                                              | The name of the recipe.                  | no       |                                                |
| heat        | [HeatCondition](/mods/createtweaker/recipe/HeatCondition)                                                           | The required heat of the recipe.         | no       |                                                |
| outputs     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;[] | The output ItemStacks of the recipe.     | no       |                                                |
| itemInputs  | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[]                                            | The item inputs of the recipe.           | no       |                                                |
| fluidInputs | [FluidIngredient](/forge/api/fluid/FluidIngredient)[]                                                               | The optional fluid inputs of the recipe. | sì       | [] as crafttweaker.api.fluid.FluidIngredient[] |
| duration    | int                                                                                                                 | The duration of the recipe in ticks.     | sì       | 100                                            |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CompactingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:compacting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
CompactingManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CompactingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:compacting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CompactingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
CompactingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parametro     | Tipo                                                                                                                           | Descrizione             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| nome          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes a recipe based on the output [IFluidStack](/forge/api/fluid/IFluidStack).

Return Type: void

```zenscript
// CompactingManager.remove(output as FluidIngredient) as void

<recipetype:create:compacting>.remove(<fluid:minecraft:water>);
```

| Parametro | Tipo                                                | Descrizione           |
| --------- | --------------------------------------------------- | --------------------- |
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output FluidStack |


:::

:::group{name=remove}

Return Type: void

```zenscript
CompactingManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// CompactingManager.removeAll() as void

<recipetype:create:compacting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
CompactingManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CompactingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CompactingManager.removeByName(names as string[]) as void
```

| Parametro | Tipo     | Descrizione             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CompactingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | No Description Provided |

