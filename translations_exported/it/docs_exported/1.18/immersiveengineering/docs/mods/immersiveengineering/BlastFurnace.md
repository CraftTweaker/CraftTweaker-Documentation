# BlastFurnace

Allows you to add or remove Blast Furnace recipes.

 Blast furnace recipes consist of an ingredient, an output and an optional slag result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.BlastFurnace;
```


## Interfacce Implementate
BlastFurnace implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnace

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
BlastFurnace.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Blast furnace recipe

```zenscript
// BlastFurnace.addRecipe(recipePath as string, ingredient as IIngredientWithAmount, time as int, output as IItemStack, slag as IItemStack)

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

| Parametro  | Tipo                                                                   | Descrizione                                            | Optional | Default Value        |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------ | -------- | -------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location         | no       |                      |
| ingredient | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The item input                                         | no       |                      |
| time       | int                                                                    | The time this recipe needs, in ticks                   | no       |                      |
| output     | [IItemStack](/vanilla/api/item/IItemStack)                             | The recipe output                                      | no       |                      |
| slag       | [IItemStack](/vanilla/api/item/IItemStack)                             | The item that should appear in the slag slot, optional | sì       | <item:minecraft:air> |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnace.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:blast_furnace>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BlastFurnace.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnace.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:blast_furnace>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnace.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnace.remove(output as IIngredient)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BlastFurnace.removeAll()

<recipetype:immersiveengineering:blast_furnace>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BlastFurnace.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnace.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnace.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnace.removeByRegex(regex as string, exclude as Predicate<string>)
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

