# Blueprint

Allows you to add or remove blueprint recipes.

 Blueprint recipes consist of a variable number of inputs and one output. They are grouped by categories, where each category is one blueprint item ingame.

 You can find all existing categories using `/ct ieBlueprintCategories`

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Blueprint;
```


## Interfacce Implementate
Blueprint implements the following interfaces. That means all methods defined in these interfaces are also available in Blueprint

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
Blueprint.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a new recipe. Make sure that the category exists before calling this method! Currently it is not possible to register new Blueprint categories.

```zenscript
// Blueprint.addRecipe(recipePath as string, blueprintCategory as string, inputs as IIngredientWithAmount[], output as IItemStack)

<recipetype:immersiveengineering:blueprint>.addRecipe("some_test", "bullet", [<item:minecraft:bedrock>], <item:minecraft:bedrock> * 2);
```

| Parametro         | Tipo                                                                     | Descrizione                                    |
| ----------------- | ------------------------------------------------------------------------ | ---------------------------------------------- |
| recipePath        | string                                                                   | The recipe name, without the resource location |
| blueprintCategory | string                                                                   | The category name. The category must exist!    |
| inputs            | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[] | The recipe's ingredients                       |
| output            | [IItemStack](/vanilla/api/item/IItemStack)                               | The recipe's output item                       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Blueprint.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:blueprint>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Blueprint.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Blueprint.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:blueprint>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Blueprint.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Blueprint.remove(output as IIngredient)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Blueprint.removeAll()

<recipetype:immersiveengineering:blueprint>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Blueprint.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Blueprint.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Blueprint.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Blueprint.removeByRegex(regex as string, exclude as Predicate<string>)
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

