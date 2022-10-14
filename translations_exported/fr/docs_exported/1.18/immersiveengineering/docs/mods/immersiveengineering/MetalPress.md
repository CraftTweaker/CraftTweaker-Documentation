# MetalPress

Allows you to add or remove Metal Press recipes.

 Metal Press recipes consist of an input, a mold item and an output.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.MetalPress;
```


## Implemented Interfaces
MetalPress implements the following interfaces. That means all methods defined in these interfaces are also available in MetalPress

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
MetalPress.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter | Type                                 |
| --------- | ------------------------------------ |
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a new metal press recipe

```zenscript
// MetalPress.addRecipe(recipePath as string, input as IIngredientWithAmount, mold as IItemStack, energy as int, output as IItemStack)

<recipetype:immersiveengineering:metal_press>.addRecipe("book_press", <item:minecraft:paper> * 2, <item:immersiveengineering:manual>, 1000, <item:immersiveengineering:manual>);
```

| Parameter  | Type                                                                   | Description                                    |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                 | The recipe name, without the resource location |
| input      | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | The recipe's input                             |
| mold       | [IItemStack](/vanilla/api/item/IItemStack)                             | The mold to be used                            |
| energy     | int                                                                    | The total energy required for this recipe      |
| output     | [IItemStack](/vanilla/api/item/IItemStack)                             | The recipe result                              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MetalPress.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:metal_press>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MetalPress.getRecipeByName(name as string) as T
```

| Parameter | Type   |
| --------- | ------ |
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MetalPress.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:metal_press>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MetalPress.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
MetalPress.remove(output as IIngredient)
```

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// MetalPress.removeAll()

<recipetype:immersiveengineering:metal_press>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
MetalPress.removeByInput(input as IItemStack)
```

| Parameter | Type                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
MetalPress.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| exclure   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
MetalPress.removeByName(names as string[])
```

| Parameter | Type     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
MetalPress.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter | Type                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| exclure   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

