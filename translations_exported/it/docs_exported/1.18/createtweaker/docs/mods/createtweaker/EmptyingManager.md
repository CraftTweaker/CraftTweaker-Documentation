# EmptyingManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.EmptyingManager;
```


## Interfacce Implementate
EmptyingManager implements the following interfaces. That means all methods defined in these interfaces are also available in EmptyingManager

- [IProcessingRecipeManager](/mods/createtweaker/IProcessingRecipeManager)&lt;[EmptyingRecipe](/mods/createtweaker/recipe/type/EmptyingRecipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
EmptyingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Adds an emptying recipe.

Return Type: void

```zenscript
// EmptyingManager.addRecipe(name as string, outputItem as Percentaged<IItemStack>, outputFluid as IFluidStack, inputContainer as IIngredient, duration as int) as void

<recipetype:create:emptying>.addRecipe("emptier", <item:minecraft:diamond>, <fluid:minecraft:water>, <item:minecraft:dirt>, 200);
```

| Parametro      | Tipo                                                                                                              | Descrizione                                               | Optional | DefaultValue |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------------ |
| nome           | string                                                                                                            | The name of the recipe.                                   | no       |              |
| outputItem     | [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The output item of the recipe.                            | no       |              |
| outputFluid    | [IFluidStack](/forge/api/fluid/IFluidStack)                                                                       | The output fluid of the recipe.                           | no       |              |
| inputContainer | [IIngredient](/vanilla/api/ingredient/IIngredient)                                                                | The input container of the recipe (what is being filled). | no       |              |
| duration       | int                                                                                                               | The duration of the recipe in ticks (defaults to 100).    | sì       | 100          |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// EmptyingManager.getAllRecipes() as stdlib.List<T>

<recipetype:create:emptying>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
EmptyingManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// EmptyingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:create:emptying>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
EmptyingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerRecipe}

Registers a recipe using a builder approach.

Return Type: void

```zenscript
EmptyingManager.registerRecipe(name as string, recipeBuilder as Consumer<ProcessingRecipeBuilder<T>>) as void
```

| Parametro     | Tipo                                                                                                                           | Descrizione             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| nome          | string                                                                                                                         | The name of the recipe. |
| recipeBuilder | Consumer&lt;[ProcessingRecipeBuilder](/mods/createtweaker/recipe/ProcessingRecipeBuilder)&lt;T&gt;&gt; | The recipe builder.     |


:::

:::group{name=remove}

Removes emptying recipes based on the output FluidStack.

Return Type: void

```zenscript
// EmptyingManager.remove(output as FluidIngredient) as void

<recipetype:create:emptying>.remove(<fluid:minecraft:water>);
```

| Parametro | Tipo                                                | Descrizione                          |
| --------- | --------------------------------------------------- | ------------------------------------ |
| output    | [FluidIngredient](/forge/api/fluid/FluidIngredient) | The output FluidStack of the recipe. |


:::

:::group{name=remove}

Return Type: void

```zenscript
EmptyingManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// EmptyingManager.removeAll() as void

<recipetype:create:emptying>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
EmptyingManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
EmptyingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
EmptyingManager.removeByName(names as string[]) as void
```

| Parametro | Tipo     | Descrizione             |
| --------- | -------- | ----------------------- |
| names     | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
EmptyingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

