# Refinery

Allows you to add or remove Refinery recipes.

 Refinery Recipes consist of two fluid inputs and a fluid output.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Refinery;
```


## Interfacce Implementate
Refinery implements the following interfaces. That means all methods defined in these interfaces are also available in Refinery

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
Refinery.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Refinery. Make sure that the provided Tags are valid fluid tags.

```zenscript
Refinery.addRecipe(recipePath as string, fluidInput1 as Many<MCTag>, fluidInput2 as Many<MCTag>, catalyst as IIngredient, energy as int, output as IFluidStack)
```

| Parametro   | Tipo                                                                              | Descrizione                                    |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath  | string                                                                            | The recipe name, without the resource location |
| fluidInput1 | [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&gt; | The first fluid input, as Tag                  |
| fluidInput2 | [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&gt; | The second fluid input, as Tag                 |
| catalyst    | [IIngredient](/vanilla/api/ingredient/IIngredient)                                | The catalyst of the recipe                     |
| energy      | int                                                                               | The total energy required                      |
| output      | [IFluidStack](/forge/api/fluid/IFluidStack)                                       | The output fluid                               |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Refinery.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:refinery>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Refinery.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Refinery.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:refinery>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Refinery.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Refinery.removeAll()

<recipetype:immersiveengineering:refinery>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Refinery.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Refinery.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Refinery.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Refinery.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts.

```zenscript
// Refinery.removeRecipe(fluid as Fluid)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel>.fluid);
```

| Parametro | Tipo                              | Descrizione                |
| --------- | --------------------------------- | -------------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match.

```zenscript
// Refinery.removeRecipe(fluidStack as IFluidStack)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel> * 16);
```

| Parametro  | Tipo                                        | Descrizione          |
| ---------- | ------------------------------------------- | -------------------- |
| fluidStack | [IFluidStack](/forge/api/fluid/IFluidStack) | The output to remove |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------------------------- | --------- | --------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        |

