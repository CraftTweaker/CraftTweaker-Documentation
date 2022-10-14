# Squeezer

Allows you to add or remove Squeezer recipes.

 Squeezer Recipes consist of an input, a fluid output and an item output.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Squeezer;
```


## Interfacce Implementate
Squeezer implements the following interfaces. That means all methods defined in these interfaces are also available in Squeezer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
Squeezer.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Squeezer. Short form if you don't want a fluid output. Does the same as if you provided `<fluid:minecraft:empty> * 0` to the other addRecipe Method.

```zenscript
// Squeezer.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, itemOutput as IItemStack)

<recipetype:immersiveengineering:squeezer>.addRecipe("slag_off", <item:immersiveengineering:slag> * 9, 5000, <item:minecraft:dirt>);
```

| Parametro  | Tipo                                                                   | Descrizione                                    |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location |
| input      | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The input item                                 |
| energy     | int                                                                    | The total energy required for this recipe      |
| itemOutput | [IItemStack](/vanilla/api/item/IItemStack)                             | The item output                                |


:::

:::group{name=addRecipe}

Adds a recipe to the Squeezer. The item output is optional.

```zenscript
// Squeezer.addRecipe(recipePath as string, input as IIngredientWithAmount, energy as int, fluidOutput as IFluidStack, itemOutput as IItemStack)

<recipetype:immersiveengineering:squeezer>.addRecipe("pressure_creates_diamonds", <item:minecraft:coal_block> * 8, 6000, <fluid:immersiveengineering:creosote> * 2500, <item:minecraft:diamond>);
```

| Parametro   | Tipo                                                                   | Descrizione                                    | Optional | Default Value        |
| ----------- | ---------------------------------------------------------------------- | ---------------------------------------------- | -------- | -------------------- |
| recipePath  | string                                                                 | The recipe name, without the resource location | no       |                      |
| input       | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The input item                                 | no       |                      |
| energy      | int                                                                    | The total energy required for this recipe      | no       |                      |
| fluidOutput | [IFluidStack](/forge/api/fluid/IFluidStack)                            | The fluid output                               | no       |                      |
| itemOutput  | [IItemStack](/vanilla/api/item/IItemStack)                             | The item output                                | sì       | <item:minecraft:air> |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Squeezer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:squeezer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Squeezer.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Squeezer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:squeezer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Squeezer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts.

```zenscript
// Squeezer.remove(fluid as Fluid)

<recipetype:immersiveengineering:squeezer>.remove(<fluid:immersiveengineering:plantoil>.fluid);
```

| Parametro | Tipo                              | Descrizione                |
| --------- | --------------------------------- | -------------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=remove}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match.

```zenscript
// Squeezer.remove(fluidStack as IFluidStack)

<recipetype:immersiveengineering:squeezer>.remove(<fluid:immersiveengineering:plantoil> * 60);
```

| Parametro  | Tipo                                        | Descrizione          |
| ---------- | ------------------------------------------- | -------------------- |
| fluidStack | [IFluidStack](/forge/api/fluid/IFluidStack) | The output to remove |


:::

:::group{name=remove}

```zenscript
Squeezer.remove(output as IIngredient)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Squeezer.removeAll()

<recipetype:immersiveengineering:squeezer>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Squeezer.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Squeezer.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Squeezer.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Squeezer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------------------------- | --------- | --------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        |

