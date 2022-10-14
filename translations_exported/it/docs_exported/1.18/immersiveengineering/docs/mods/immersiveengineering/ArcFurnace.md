# ArcFurnace

Allows you to add or remove arc furnace smelter recipes.

 Arc Furnace recipes consist of one base ingredident, a list of additives, and a list of outputs. Optionally, they can also have an item as slag output.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.ArcFurnace;
```


## Interfacce Implementate
ArcFurnace implements the following interfaces. That means all methods defined in these interfaces are also available in ArcFurnace

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
ArcFurnace.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Arc Furnace

```zenscript
// ArcFurnace.addRecipe(recipePath as string, mainIngredient as IIngredientWithAmount, additives as IIngredientWithAmount[], time as int, energy as int, outputs as IItemStack[], slag as IItemStack)

<recipetype:immersiveengineering:arc_furnace>.addRecipe("coal_to_bedrock", <item:minecraft:coal_block> * 2, [<item:minecraft:diamond> * 1, <tag:minecraft:wool>], 2000, 100000, [<item:minecraft:bedrock>], <item:minecraft:gold_nugget>);
```

| Parametro      | Tipo                                                                     | Descrizione                                    | Optional | Default Value        |
| -------------- | ------------------------------------------------------------------------ | ---------------------------------------------- | -------- | -------------------- |
| recipePath     | string                                                                   | The recipe name, without the resource location | no       |                      |
| mainIngredient | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)   | The main ingredient                            | no       |                      |
| additives      | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The additives                                  | no       |                      |
| time           | int                                                                      | The time the recipe takes, in ticks            | no       |                      |
| energy         | int                                                                      | The total energy the recipe requires           | no       |                      |
| outputs        | [IItemStack](/vanilla/api/item/IItemStack)[]                             | The recipe result(s)                           | no       |                      |
| slag           | [IItemStack](/vanilla/api/item/IItemStack)                               | The item that should appear as slag            | sì       | <item:minecraft:air> |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ArcFurnace.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:arc_furnace>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
ArcFurnace.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ArcFurnace.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:arc_furnace>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ArcFurnace.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Removes a recipe based on its outputs. Removes the recipe as long as one of the recipe's outputs matches the ingredient given.

```zenscript
// ArcFurnace.remove(output as IIngredient, checkSlag as boolean)

<recipetype:immersiveengineering:arc_furnace>.remove(<item:minecraft:iron_ore>, true);
```

| Parametro | Tipo                                               | Descrizione                                               |
| --------- | -------------------------------------------------- | --------------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The recipe result                                         |
| checkSlag | boolean                                            | If the slag output should be included in the check or not |


:::

:::group{name=removeAll}

```zenscript
// ArcFurnace.removeAll()

<recipetype:immersiveengineering:arc_furnace>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
ArcFurnace.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
ArcFurnace.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
ArcFurnace.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
ArcFurnace.removeByRegex(regex as string, exclude as Predicate<string>)
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

