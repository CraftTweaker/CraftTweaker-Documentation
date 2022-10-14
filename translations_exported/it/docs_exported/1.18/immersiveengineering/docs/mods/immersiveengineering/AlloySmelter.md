# AlloySmelter

Allows you to add or remove alloy smelter recipes.

 Alloy smelter recipes consist of two input ingredients (size dependent) and one output ItemStack

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.AlloySmelter;
```


## Interfacce Implementate
AlloySmelter implements the following interfaces. That means all methods defined in these interfaces are also available in AlloySmelter

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
AlloySmelter.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the alloy smelter

```zenscript
// AlloySmelter.addRecipe(recipePath as string, inputA as IIngredientWithAmount, inputB as IIngredientWithAmount, time as int, output as IItemStack)

<recipetype:immersiveengineering:alloy>.addRecipe("spin_iron_to_gold", <item:minecraft:iron_ingot> * 10, <tag:minecraft:wool>, 200, <item:minecraft:gold_ingot> * 2);
```

| Parametro  | Tipo                                                                   | Descrizione                                    |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location |
| inputA     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The first item input                           |
| inputB     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The second item input                          |
| time       | int                                                                    | The time this recipe needs, in ticks           |
| output     | [IItemStack](/vanilla/api/item/IItemStack)                             | The recipe output                              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// AlloySmelter.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:alloy>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
AlloySmelter.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// AlloySmelter.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:alloy>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
AlloySmelter.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
AlloySmelter.remove(output as IIngredient)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// AlloySmelter.removeAll()

<recipetype:immersiveengineering:alloy>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
AlloySmelter.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
AlloySmelter.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
AlloySmelter.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
AlloySmelter.removeByRegex(regex as string, exclude as Predicate<string>)
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

