# Mixer

Allows you to add or remove Mixer recipes.

 Mixer Recipes consist of a fluid input, multiple item inputs and a fluid output.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Mixer;
```


## Interfacce Implementate
Mixer implements the following interfaces. That means all methods defined in these interfaces are also available in Mixer

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
Mixer.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Mixer. Make sure that the provided Tag is a valid fluid tag.

 Mixer recipes will always convert 1mB of the input fluid to 1mB of the output fluid. The `amount` parameter specifies for how many mB the given ingredients last

```zenscript
// Mixer.addRecipe(recipePath as string, fluidInput as MCTag, inputItems as IIngredientWithAmount[], energy as int, output as Fluid, amount as int)

<recipetype:immersiveengineering:mixer>.addRecipe("grow_creosote_oil", <tag:minecraft:water>, [<item:minecraft:oak_sapling>, <item:minecraft:bone_meal> * 4, <item:immersiveengineering:creosote_bucket>], 5000, <fluid:immersiveengineering:creosote>.fluid, 8000);
```

| Parametro  | Tipo                                                                     | Descrizione                                                              |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| recipePath | string                                                                   | The recipe name, without the resource location                           |
| fluidInput | [MCTag](/vanilla/api/tag/MCTag)                                          | The fluid input as Tag                                                   |
| inputItems | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The required input items                                                 |
| energy     | int                                                                      | The total energy required                                                |
| output     | [Fluid](/vanilla/api/fluid/Fluid)                                        | The produced output fluidStack                                           |
| amount     | int                                                                      | The amount of fluid that can be converted per set of input items (in mB) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Mixer.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:mixer>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Mixer.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Mixer.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:mixer>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Mixer.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Mixer.removeAll()

<recipetype:immersiveengineering:mixer>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Mixer.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Mixer.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Mixer.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Mixer.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid. Since it's only the fluid, it does not check amounts. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluid as Fluid)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete>.fluid);
```

| Parametro | Tipo                              | Descrizione                |
| --------- | --------------------------------- | -------------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) | The fluid output to remove |


:::

:::group{name=removeRecipe}

Removes all recipes that return this given fluid Stack. Only removes if the fluid and the fluid amount match. Does not remove potion recipes!

```zenscript
// Mixer.removeRecipe(fluidStack as IFluidStack)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete> * 500);
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

