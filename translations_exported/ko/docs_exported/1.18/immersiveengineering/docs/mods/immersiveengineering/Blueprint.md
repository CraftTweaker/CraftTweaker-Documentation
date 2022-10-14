# Blueprint

Allows you to add or remove blueprint recipes.

 Blueprint recipes consist of a variable number of inputs and one output. They are grouped by categories, where each category is one blueprint item ingame.

 You can find all existing categories using `/ct ieBlueprintCategories`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.Blueprint;
```


## Implemented Interfaces
Blueprint implements the following interfaces. That means all methods defined in these interfaces are also available in Blueprint

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Blueprint.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a new recipe. Make sure that the category exists before calling this method! Currently it is not possible to register new Blueprint categories.

```zenscript
// Blueprint.addRecipe(recipePath as string, blueprintCategory as string, inputs as IIngredientWithAmount[], output as IItemStack)

<recipetype:immersiveengineering:blueprint>.addRecipe("some_test", "bullet", [<item:minecraft:bedrock>], <item:minecraft:bedrock> * 2);
```

| Parameter         | Type                                                                     | Description                                    |
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

| Parameter | Type   |
| --------- | ------ |
| name      | string |


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

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Blueprint.remove(output as IIngredient)
```

| Parameter | Type                                               |
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

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Blueprint.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Blueprint.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Blueprint.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Properties

| 이름         | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

